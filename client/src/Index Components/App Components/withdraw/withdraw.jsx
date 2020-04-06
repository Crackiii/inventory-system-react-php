import React, { Component } from 'react'
import './withdraw.scss'
import Select from 'react-select'
import Cables from './cables/cables'
import Others from './others/others'
import Input from '../../../Shared/Elements/input/input'
import {productType} from '../../../Shared/Data/entries'
import {Ajax} from '../../../Shared/Services/ajax'
import { salert } from '../../../Shared/sweetalert'

export class withdraw extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cables : true,
            others : false,
            barcode: ''
        }
        this.barcodeTransSubmit = this.barcodeTransSubmit.bind(this)
        this.prodSelect = this.prodSelect.bind(this)
        this.transInput = this.transInput.bind(this)
        this.cablesTransactData = this.cablesTransactData.bind(this)
        this.othersTransactData = this.othersTransactData.bind(this)
    }

    componentDidMount(){

    }

    barcodeTransSubmit(event){
        event.preventDefault()
    }

    prodSelect(data, event){
        if(data.value === "cables"){
            this.setState({
                cables : true,
                others : false
            })
        } else if(data.value === "others") {
            this.setState({
                cables : false,
                others : true
            })
        }
    }

    transInput(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    async cablesTransactData(_data){
        console.log("CABLES DATA - ", _data);
        if(_data.activeRoute === "withdraw"){
            if(this.state.cables){
                let response = await new Ajax().post("transaction", {barcode: this.state.barcode, timestamp: new Date().getTime(), ..._data}, "cables")
                salert.fire("Success", response.main_t.message, "success");
            }
        }
    }

    async othersTransactData(_data){
        console.log("OTHERS DATA - ", _data);
        if(_data.activeRoute === "withdraw"){
            if(this.state.others){
                let response = await new Ajax().post("transaction", {barcode: this.state.barcode, timestamp: new Date().getTime(), ..._data}, "others")
                salert.fire("Success", response.message, "success");
            }
        }
    }
    
    render() {
        return (
            <div className="withdraw">
                <div className="row">
                    <div className="col-12">
                        <div className="big-head"> <i className="far fa-minus-square"></i> Make a Transaction </div>
                    </div>
                    <div className="col-8 offset-2">
                        <form onSubmit={this.barcodeTransSubmit} className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Select Type of Your Product</label>
                                    <Select options={productType} defaultValue={productType[0]} placeholder="Choose Product Type" onChange={this.prodSelect} />
                                </div>
                            </div>
                            <div className="col-12">
                                <Input 
                                    type="text"
                                    placeholder="Focus, and scan the product to get the barcode value"
                                    label="Barcode Value"
                                    required={false}
                                    name="barcode"
                                    id="barcode"
                                    value={this.state.barcode}
                                    onChange={this.transInput}
                                />
                            </div>
                            { (this.state.cables) ? <Cables onData={this.cablesTransactData} /> : (this.state.others) ? <Others onData={this.othersTransactData} /> : '' }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withdraw
