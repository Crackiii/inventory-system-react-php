import React, { Component } from 'react'
import './barcode.scss'
import Select from 'react-select'
import Cables from '../cables_entries/cables'
import Others from '../others_entries/others'
import Input from '../../../../Shared/Elements/input/input'
import {productType} from '../../../../Shared/Data/entries'
import { Ajax } from '../../../../Shared/Services/ajax'
import { salert } from '../../../../Shared/sweetalert'

export class barcode extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productType : [],
             cables : true,
             others : false,
             barcode: ''
        }

        this.barcodeEntrySubmit = this.barcodeEntrySubmit.bind(this)
        this.prodSelect = this.prodSelect.bind(this)
        this.entryInput = this.entryInput.bind(this)
        this.cablesData = this.cablesData.bind(this)
        this.othersData = this.othersData.bind(this)
    }

    componentDidMount(){

    }

    barcodeEntrySubmit(event){
        event.preventDefault()
        console.log("SUBMITTED")
    }

    prodSelect(data){
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

    entryInput(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async cablesData(_data){
        console.log("Data recieved -- ", _data)
        if(_data.activeRoute === "barcodeEntry"){
            console.log("c1")
            if(this.state.barcode !== ''){
                console.log("c2")
                if(this.state.cables){
                    let response = await new Ajax().post("entry", {barcode: this.state.barcode, timestamp: new Date().getTime(), ..._data}, "cables")
                    if(response.success){
                        salert.fire("Success", response.main_t.message, "success");
                    } else{
                        console.log(response.error)
                        salert.fire(`${response.main_t.error.type} \n ${response.sub_t.error.type} `, 
                                    `${response.main_t.error.message} \n ${response.sub_t.error.message}`, "error");
                    }
                    
                }
            } else{
                console.log("Caled");
                salert.fire("Error","Barcode Value Requried !", "error")
            }
        }
    }

    async othersData(_data){
        console.log("Data recieved OTHERS -- ", _data)
        if(_data.activeRoute === "barcodeEntry"){
            if(this.state.barcode !== ''){
                if(this.state.others){
                    let response = await new Ajax().post("entry", {barcode: this.state.barcode, timestamp: new Date().getTime(), ..._data}, "others")
                    if(response.success){
                        salert.fire("Success", response.message, "success");
                    } else{
                        salert.fire(response.error.title, response.error.message, "error");
                    }
                }
            } else{
                salert.fire("Error","Barcode Value Requried !", "error")
            }
        }
    }

    render() {

        return (
            <div className="barcode-entry">
                <div className="row">
                    <div className="col-12">
                        <form id="barcode_entry" onSubmit={this.barcodeEntrySubmit} className="row">
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
                                    required={true}
                                    name="barcode"
                                    id="barcode"
                                    value={this.state.barcode}
                                    onChange={this.entryInput}
                                />
                            </div>
                            { (this.state.cables) ? <Cables onData={this.cablesData}/> : (this.state.others) ? <Others onData={this.othersData} /> : '' }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default barcode
