import React, { Component } from 'react'
import './pay.scss'
import Select from 'react-select'
import {payers, payersType} from '../../../../Shared/Data/entries'
import { salert } from '../../../../Shared/sweetalert'
import { Ajax } from '../../../../Shared/Services/ajax'

export class pay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            payer: '',
            name : '',
            address : '',
            phone : '',
            nic : '',
            amount : '',
            paying_for_name : '',
            paying_for_address : '',
            paying_for_phone : '',
            paying_for_nic : '',

            payer_type : '',
            name_data: [],
            paying_for_name_data : [],
            selected_person : {},
            paying_for_selected_person : {},
            hide_name : false,
            paying_for_hide_name : false
        }

        this.paySubmit = this.paySubmit.bind(this)
        this.duePaySelect = this.duePaySelect.bind(this)
        this.payControl = this.payControl.bind(this)
        this.handleItem = this.handleItem.bind(this)
        this.closeItem = this.closeItem.bind(this)
    }

    componentDidMount(){
        
    }

    duePaySelect(data,event){
        this.setState({
            [event.name] : data.value
        })
    }

    payControl(event){
        this.setState({
            [event.target.name]: event.target.value
        })

        if(event.target.name === "name" || event.target.name == "paying_for_name"){
            console.log("NAME CALLED");
            this.nameInputChange(event.target.name,event.target.value)
        }

    }

    async nameInputChange(name,value){
        let response = await new Ajax().get("reports", {_value: value}, "dues_reports");

        if(name === "paying_for_name"){
            this.setState({
                paying_for_name_data : response
            })
        } else{
            this.setState({
                name_data : response
            })
        }
        
    }

    async paySubmit(event){
        event.preventDefault()
        if(this.state.payer === "self"){
            if(
                !this.state.hide_name &&
                this.state.name !== '' &&
                this.state.address !== '' &&
                this.state.phone !== '' &&
                this.state.amount !== '' &&
                this.state.nic !== ''
            ){
                let response = await new Ajax().post("dues",{...this.state, time: new Date().getTime()}, "pay")
                console.log(response)
            } else if(
                this.state.hide_name &&
                this.state.amount !== ''
            ){
                let response = await new Ajax().post("dues", {...this.state, time: new Date().getTime()}, "pay")
                console.log(response)
            } else{
                salert.fire("Error !", "You must fill all of the feilds !", "error")
            }

        } else if(this.state.payer === "referee"){
            if(
                !this.state.paying_for_hide_name &&
                this.state.paying_for_name !== '' &&
                this.state.paying_for_address !== '' &&
                this.state.paying_for_phone !== '' &&
                this.state.amount !== '' &&
                this.state.paying_for_nic !== '' 
            ){
                let response = await new Ajax().post("dues", {...this.state, time: new Date().getTime()}, "pay")
                console.log(response)
            } else if(
                this.state.paying_for_hide_name &&
                this.state.amount !== ''
            ){
                let response = await new Ajax().post("dues", {...this.state, time: new Date().getTime()}, "pay")
                console.log(response)
            } else{
                salert.fire("Error !", "You must fill all of the feilds !", "error")
            }
        }
    }

    handleItem(item, name){

        if(name === "paying_for_name"){
            this.setState({
                paying_for_selected_person : item
            }, () => this.setState({paying_for_hide_name: true}))
        } else{
            this.setState({
                selected_person : item
            }, () => this.setState({hide_name: true}))
        }
    }

    closeItem(name){
        if(name === "paying_for_name"){
            this.setState({
                paying_for_hide_name: false,
                paying_for_selected_person : {},
                paying_for_name: ''
            }) 
        } 
        if(name === "name"){
            this.setState({
                hide_name: false,
                selected_person : {},
                name: ''
            })
        }
    }
    
    render() {
        return (
            <>
                <form onSubmit={this.paySubmit} className="duesPad">
                    <div className="form-group">
                        <label>Payment Type</label>
                        <Select options={payers} name="payer" onChange={this.duePaySelect} placeholder={"Select Payer Type.."} />
                    </div>
                    <div className="form-group">
                        <label>Who's the current Payer ?</label>
                        <Select options={payersType} name="payer_type" onChange={this.duePaySelect} placeholder={"Select Payer Type.."} />
                    </div>
                    {
                        this.state.payer !== "" ?
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group">
                            <label>Person Name</label>
                            <input className="myInp" placeholder="Person Name..." name="name" value={this.state.name} onChange={this.payControl} />
                        </div> :
                        !this.state.hide_name ?
                        <div className="form-group">
                            <label>Person Name</label>
                            <input className="myInp" placeholder="Person Name..." name="name" value={this.state.name} onChange={this.payControl} autoComplete="off" />
                            {this.state.name_data.length !== 0 && this.state.name_data[0] !== 0 && this.state.name !== "" ?
                            <div className="people_list">
                            {
                                this.state.name_data.map( (item, idx) => {
                                    return(
                                        <div className="list-item" key={idx} onClick={() => this.handleItem(item, "name")}>
                                            <div className="li">
                                                <div className="flex-row-space">
                                                    <div className="name">{item.person_name}</div>
                                                </div>
                                                <div className="flex-row-space">
                                                    <div className="nic">{item.person_nic}</div>
                                                    <div className="phone">{item.person_phone}</div>
                                                </div>
                                                <div className="address">{item.person_address}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div> : ''
                            }
                        </div> :
                        <div className="list-item form-group">
                            <div className="li li-custom">
                                <span className="close_item" onClick={() => this.closeItem("name")}><i className='fas fa-times'></i>x</span>
                                <div className="flex-row-space">
                                    <div className="name">{this.state.selected_person.person_name}</div>
                                </div>
                                <div className="flex-row-space">
                                    <div className="nic">{this.state.selected_person.person_nic}</div>
                                    <div className="phone">{this.state.selected_person.person_phone}</div>
                                </div>
                                <div className="address">{this.state.selected_person.person_address}</div>
                            </div>
                        </div> : ''
                    }
                    {
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group">
                            <label>Person Phone</label>
                            <input className="myInp" placeholder="Person Phone..." name="phone" value={this.state.phone} onChange={this.payControl} />
                        </div> : ''
                    }
                    {
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group">
                            <label>Person Address</label>
                            <input className="myInp" placeholder="Person Address..." name="address" value={this.state.address} onChange={this.payControl} />
                        </div> : ''
                    }
                    {
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group ">
                            <label>Person NIC</label>
                            <input className="myInp" placeholder="Person NIC..." name="nic" value={this.state.nic} onChange={this.payControl} />
                        </div> : ''
                    }

                    {
                        this.state.payer === "referee" ?
                        <div className="form-group">
                            <label>Who are you Paying For ?</label>
                            <Select options={payersType} name="paying_for_pt" onChange={this.duePaySelect} placeholder={"Who are you paying for ?"} />
                        </div> : ''
                    }
                    {
                        this.state.payer === "referee"? 
                        this.state.paying_for_pt !== "" && this.state.paying_for_pt === "new" ?
                        <div className="form-group">
                            <label>Person Name</label>
                            <input className="myInp" placeholder="Person Name..." name="paying_for_name" value={this.state.paying_for_name} onChange={this.payControl} />
                        </div> :
                        !this.state.paying_for_hide_name ?
                        <div className="form-group">
                            <label>Person Name</label>
                            <input className="myInp" placeholder="Person Name..." name="paying_for_name" value={this.state.paying_for_name} onChange={this.payControl} autoComplete="off" />
                            {this.state.paying_for_name_data.length !== 0 && this.state.paying_for_name_data[0] !== 0 && this.state.paying_for_name !== "" ?
                            <div className="people_list">
                            {
                                this.state.paying_for_name_data.map( (item, idx) => {
                                    return(
                                        <div className="list-item" key={idx} onClick={() => this.handleItem(item, "paying_for_name")}>
                                            <div className="li">
                                                <div className="flex-row-space">
                                                    <div className="name">{item.person_name}</div>
                                                </div>
                                                <div className="flex-row-space">
                                                    <div className="nic">{item.person_nic}</div>
                                                    <div className="phone">{item.person_phone}</div>
                                                </div>
                                                <div className="address">{item.person_address}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div> : ''
                            }
                        </div> :
                        <div className="list-item form-group">
                            <div className="li li-custom">
                                <span className="close_item" onClick={() => this.closeItem("paying_for_name")}><i className='fas fa-times'></i>x</span>
                                <div className="flex-row-space">
                                    <div className="name">{this.state.paying_for_selected_person.person_name}</div>
                                </div>
                                <div className="flex-row-space">
                                    <div className="nic">{this.state.paying_for_selected_person.person_nic}</div>
                                    <div className="phone">{this.state.paying_for_selected_person.person_phone}</div>
                                </div>
                                <div className="address">{this.state.paying_for_selected_person.person_address}</div>
                            </div>
                        </div> : ''
                    }
                    {
                        this.state.paying_for_pt !== "" && this.state.paying_for_pt === "new" ?
                        <div className="form-group">
                            <label>Person Phone</label>
                            <input className="myInp" placeholder="Person Phone..." name="paying_for_phone" value={this.state.paying_for_phone} onChange={this.payControl} />
                        </div> : ''
                    }
                    {
                        this.state.paying_for_pt !== "" && this.state.paying_for_pt === "new" ?
                        <div className="form-group">
                            <label>Person Address</label>
                            <input className="myInp" placeholder="Person Address..." name="paying_for_address" value={this.state.paying_for_address} onChange={this.payControl} />
                        </div> : ''
                    }
                    {
                        this.state.paying_for_pt !== "" && this.state.paying_for_pt === "new" ?
                        <div className="form-group ">
                            <label>Person NIC</label>
                            <input className="myInp" placeholder="Person NIC..." name="paying_for_nic" value={this.state.paying_for_nic} onChange={this.payControl} />
                        </div> : ''
                    }
                    {
                        this.state.payer_type !== "" ? 
                        <>
                        <div className="form-group">
                            <label>Due Amount</label>
                            <input className="myInp" placeholder="Due Amount..." name="amount" value={this.state.amount} onChange={this.payControl} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary"> Submit Payment </button>
                        </div> 
                        </> : ''
                    }
                    
                </form>
            </>
        )
    }
}

export default pay