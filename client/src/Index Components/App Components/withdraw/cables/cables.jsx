import React, { Component } from 'react'
import './cables.scss'
import Input from '../../../../Shared/Elements/input/input'
import {company, color, core} from '../../../../Shared/Data/entries'
import Select from 'react-select'
import { salert } from '../../../../Shared/sweetalert'


export class cables extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            size : '',
            company_sel : '',
            core_sel : '',
            color_sel : '',
            packs : 0,
            price_meter : 0,
            sprice_meter : '',
            bundles : 0,
            price_kg : '',
            total_kgs : 0,
            activeRoute: window.location.pathname.split("/")[window.location.pathname.split("/").length-1],
            isImported : false
        }

        this.entryInput = this.entryInput.bind(this)
        this.entrySelect = this.entrySelect.bind(this)
        this.cablesTransact = this.cablesTransact.bind(this)

    }

    entryInput(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    entrySelect(data, event){
        this.setState({
            [event.name] : data.value
        })

        if(event.name === "company_sel" && data.value === "imported"){
            this.setState({
                isImported : true
            })
        } else if(event.name === "company_sel" && data.value !== "imported"){
            this.setState({
                isImported : false
            })
        }
    }

    cablesTransact(){
        if( 
            this.state.size !== '' &&
            this.state.company_sel !== '' &&
            this.state.core_sel !== '' &&
            this.state.color_sel !== ''
        ) {
            if(!this.state.isImported){
                if(
                    parseInt(this.state.packs) !== 0 &&
                    parseInt(this.state.price_meter) !== 0
                ){
                    this.props.onData(this.state)
                } else{
                    salert.fire("Error !", "You must fill all of the required fields !", "error")
                }
            } else{
                if(
                    parseInt(this.state.bundles)  !== 0 &&
                    this.state.price_kg  !== '' &&
                    parseInt(this.state.total_kgs)  !== 0  
                ){
                    this.props.onData(this.state)
                } else{
                    salert.fire("Error !", "You must fill all of the required fields !", "error")
                }
            }
        } else{
            salert.fire("Error !", "You must fill all of the required fields !", "error")
        }
    }
    
    render() {
        return (
            <>
                <div className="col-6">
                    <Input 
                        type="text"
                        placeholder="Size of the Wire"
                        label="Size in (mm)"
                        required={true}
                        name="size"
                        id="size"
                        value={this.state.size}
                        onChange={this.entryInput}
                    />
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Company</label>
                        <Select options={company} name="company_sel" onChange={this.entrySelect} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Color</label>
                        <Select options={color} name="color_sel" onChange={this.entrySelect} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label>Core</label>
                        <Select options={core} name="core_sel" onChange={this.entrySelect} />
                    </div>
                </div>
                {
                    !this.state.isImported ? 
                    <><div className="col-6">
                        <Input 
                            type="text"
                            placeholder="Total Packs to Transact"
                            label="Total Packs to Transact"
                            required={true}
                            name="packs"
                            id="packs"
                            value={this.state.packs}
                            onChange={this.entryInput}
                        />
                    </div>
                    <div className="col-6">
                        <Input 
                            type="text"
                            placeholder="Price per Meter"
                            label="Price per Meter"
                            required={true}
                            name="price_meter"
                            id="price_meter"
                            value={this.state.price_meter}
                            onChange={this.entryInput}
                        />
                    </div>
                    </> : 
                    <><div className="col-6">
                        <Input 
                            type="text"
                            placeholder="Total Bundles Recieved"
                            label="Bundles Recieved"
                            required={true}
                            name="bundles"
                            id="bundles"
                            value={this.state.bundles}
                            onChange={this.entryInput}
                        />
                    </div>
                    <div className="col-6">
                        <Input 
                            type="text"
                            placeholder="Price per KG"
                            label="Price per Kilogram of the Imported Cable"
                            required={true}
                            name="price_kg"
                            id="price_kg"
                            value={this.state.price_kg}
                            onChange={this.entryInput}
                        />
                    </div>
                    <div className="col-6">
                        <Input 
                            type="text"
                            placeholder="KGs per Bundle"
                            label="Total number of KGs in the bundle"
                            required={true}
                            name="total_kgs"
                            id="total_kgs"
                            value={this.state.total_kgs}
                            onChange={this.entryInput}
                        />
                    </div></>
                }
                
                <div className="col-12">
                    <div className="total-text">
                        You are going to make a transaction of 51 Packs, Goodman Cables, which is 3491 Meteres, and the price per meter is RS.145 which is total of RS.140,000.
                    </div>
                    <hr />
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <button className="btn btn-danger" onClick={this.cablesTransact}>Make Transaction Now</button>
                    </div>
                </div>
            </>
        )
    }
}

export default cables
