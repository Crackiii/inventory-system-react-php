import React, { Component } from 'react'
import './cables.scss'
import {  } from 'react-router-dom'
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
            bundles : 0,
            price_kg : '',
            total_kgs : 0,
            sprice_meter: '',
            sprice_kg: '',
            isImported : false,
            timestamp: new Date().getTime(),
            activeRoute: window.location.pathname.split("/")[window.location.pathname.split("/").length-1]
        }

        this.entryInput = this.entryInput.bind(this)
        this.entrySelect = this.entrySelect.bind(this)
        this.cablesSubmit = this.cablesSubmit.bind(this)

    }

    componentDidMount(){

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

    cablesSubmit(){
        if( 
            this.state.size !== '' &&
            this.state.company_sel !== '' &&
            this.state.core_sel !== '' &&
            this.state.color_sel !== ''
        ) {
            if(!this.state.isImported){
                if(
                    this.state.packs !== 0 &&
                    this.state.price_meter !== 0 &&
                    this.state.sprice_meter!== '' 
                ){
                    this.props.onData(this.state)
                } else{
                    salert.fire("Error", "You must fill all of the fields !", 'error')
                }
            } else{
                if(
                    this.state.bundles  !== 0 &&
                    this.state.price_kg  !== '' &&
                    this.state.total_kgs  !== 0 &&
                    this.state.sprice_kg !== '' 
                ){
                    this.props.onData(this.state)
                } else{
                    salert.fire("Error", "You must fill all of the fields !", 'error')
                }
            }
        } else{
            salert.fire("Error", "You must fill all of the fields !", 'error')
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
                            placeholder="Total Packs Recieved"
                            label="Packs Recieved"
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
                            placeholder="Price of the Cable per Meter, you received from the supplier"
                            label="The Unit Price per Meter"
                            required={true}
                            name="price_meter"
                            id="price_meter"
                            value={this.state.price_meter}
                            onChange={this.entryInput}
                        />
                    </div>
                    <div className="col-6">
                        <Input 
                            type="text"
                            placeholder="Sales price of the Cable per Meter, you will sell to the customers"
                            label="The Sales Price per Meter"
                            required={true}
                            name="sprice_meter"
                            id="sprice_meter"
                            value={this.state.sprice_meter}
                            onChange={this.entryInput}
                        />
                    </div> </> : 
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
                            placeholder="Unit Price per KG"
                            label="Unit price per Kilogram of the Imported Cable"
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
                    </div>
                    <div className="col-6">
                        <Input 
                            type="text"
                            placeholder="Sales price per KG"
                            label="Sales Price"
                            required={true}
                            name="sprice_kg"
                            id="sprice_kg"
                            value={this.state.sprice_kg}
                            onChange={this.entryInput}
                        />
                    </div></>
                }
                
                <div className="col-12">
                    <div className="total-text">
                        You are going to make entry of 
                        {
                            !this.state.isImported ? 
                            <b> {this.state.packs} Packs</b> : 
                            <b> {this.state.bundles} Bundles</b>
                        }
                        , which is
                        {
                            !this.state.isImported ? 
                            <b> {this.state.packs * 90} Meteres</b> : 
                            <b> {this.state.bundles * this.state.total_kgs} KGs</b>
                        }
                        , and the price per 
                        {
                            !this.state.isImported ? 
                            <b> METER</b> : 
                            <b> KG</b>
                        } is 
                        {
                            !this.state.isImported ? 
                            <b> RS.{this.state.price_meter}</b> : 
                            <b> RS.{this.state.price_kg}</b>
                        } which is total of 
                        {
                            !this.state.isImported ? 
                            <b> RS.{this.state.price_meter * this.state.packs * 90}</b> : 
                            <b> RS.{this.state.price_kg * this.state.bundles * this.state.total_kgs}</b>
                        }.
                    </div>
                    <hr />
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <button className="btn btn-success" onClick={this.cablesSubmit} >Make Entry Now</button>
                    </div>
                </div>
            </>
        )
    }
}

export default cables
