import React, { Component } from 'react'
import './manual.scss'
import Select from 'react-select'
import Cables from '../cables_entries/cables'
import Others from '../others_entries/others'
import {productType} from '../../../../Shared/Data/entries'
import { Ajax } from '../../../../Shared/Services/ajax'
import { salert } from '../../../../Shared/sweetalert'

export class manual extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productType : [],
            cables : true,
            others : false
       }

       this.barcodeEntrySubmit = this.barcodeEntrySubmit.bind(this)
       this.prodSelect = this.prodSelect.bind(this)
       this.cablesData = this.cablesData.bind(this)
       this.othersData = this.othersData.bind(this)
    }

    componentDidMount(){

    }

    barcodeEntrySubmit(event){
        event.preventDefault()
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


    async cablesData(_data){
        console.log("Data recieved -- ", _data)
        if(_data.activeRoute === "manualEntry"){
            if(this.state.cables){
                let response = await new Ajax().post("entry", {barcode: 0, timestamp: new Date().getTime(), ..._data}, "cables")
                salert.fire("Success", response.main_t.message, "success");
            }
        }
    }

    async othersData(_data){
        console.log("Data recieved OTHERS -- ", _data)
        if(_data.activeRoute === "manualEntry"){
            if(this.state.others){
                let response = await new Ajax().post("entry", {barcode: 0, timestamp: new Date().getTime(), ..._data}, "others")
                salert.fire("Success", response.message, "success");
            }
        }
    }
    
    render() {
        return (
            <div className="manual-entry">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.barcodeEntrySubmit} className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Select Type of Your Product</label>
                                    <Select options={productType} defaultValue={productType[0]} placeholder="Choose Product Type" onChange={this.prodSelect} />
                                </div>
                            </div>
                            { (this.state.cables) ? <Cables onData={this.cablesData}/> : (this.state.others) ? <Others onData={this.othersData} /> : '' }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default manual
