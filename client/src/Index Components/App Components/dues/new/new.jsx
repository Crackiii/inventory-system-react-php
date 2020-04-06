import React, { Component } from 'react'
import './new.scss'
import {salert} from '../../../../Shared/sweetalert'
import { Ajax } from '../../../../Shared/Services/ajax'
import Select from 'react-select'
import { payersType } from '../../../../Shared/Data/entries'

export class NewDues extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             address : '',
             phone : '',
             amount : '',
             nic : '',
             product : '',
             start_date : '',
             end_date : '',

             payer_type: '',
             name_data : '',
             selected_person : {},
             hide_name : false
        }

        this.dueControl = this.dueControl.bind(this)
        this.dueSubmit = this.dueSubmit.bind(this)
        this.duePayerSelect = this.duePayerSelect.bind(this)
        this.closeItem = this.closeItem.bind(this)
    }
    
    dueControl(event){
        this.setState({
            [event.target.name]: event.target.value
        })

        if(event.target.name === "name"){
            this.nameInputChange(event.target.value)
        }
    }

    async nameInputChange(value){
        let response = await new Ajax().get("reports", {_value: value}, "dues_reports");
        this.setState({
            name_data : response
        })
    }

    duePayerSelect(data, event){
        this.setState({
            [event.name] : data.value
        })
    }

    handleItem(item){
        this.setState({
            selected_person : item
        }, () => this.setState({hide_name: true}))
    }

    closeItem(){
        this.setState({
            hide_name: false,
            selected_person : {},
            name: ''
        })
    }

    async dueSubmit(event){
        event.preventDefault()
        if(
            this.state.start_date !== '' &&
            this.state.end_date !== '' &&
            this.state.product !== '' &&
            this.state.amount !== '' 
        ){
            if(
                this.state.payer_type !== "existing" && 
                this.state.name !== '' &&
                this.state.address !== '' &&
                this.state.phone !== '' &&
                this.state.nic !== ''
            ){
                let response = await new Ajax().post("dues", this.state, "new")
                console.log(response);
            } else if(this.state.payer_type === "existing"){
                let response = await new Ajax().post("dues", this.state, "new")
                console.log(response);
            }
             else{
                salert.fire("Error !", "You must fill all of the inputs !", "error")
            }

        } else{
            salert.fire("Error !", "You must fill all of the inputs !", "error")
        }

    }

    
    
    render() {
        return (
            <>

                <form onSubmit={this.dueSubmit} className="duesPad">
                    <div className="form-group">
                        <label>Payer Type</label>
                        <Select options={payersType} name="payer_type" onChange={this.duePayerSelect} placeholder={"Select Payer Type.."} />
                    </div>
                    {
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group">
                            <label>Person Name</label>
                            <input className="myInp" placeholder="Person Name..." name="name" value={this.state.name} onChange={this.dueControl} />
                        </div> : 
                        !this.state.hide_name ?
                        <div className="form-group">
                            <label>Person Name</label>
                            <input className="myInp" placeholder="Person Name..." name="name" value={this.state.name} onChange={this.dueControl} autoComplete="off" />
                            {this.state.name_data.length !== 0 && this.state.name_data[0] !== 0 && this.state.name !== "" ?
                            <div className="people_list">
                            {
                                this.state.name_data.map( (item, idx) => {
                                    return(
                                        <div className="list-item" key={idx} onClick={() => this.handleItem(item)}>
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
                                <span className="close_item" onClick={this.closeItem}><i className='fas fa-times'></i>x</span>
                                <div className="flex-row-space">
                                    <div className="name">{this.state.selected_person.person_name}</div>
                                </div>
                                <div className="flex-row-space">
                                    <div className="nic">{this.state.selected_person.person_nic}</div>
                                    <div className="phone">{this.state.selected_person.person_phone}</div>
                                </div>
                                <div className="address">{this.state.selected_person.person_address}</div>
                            </div>
                        </div>
                    }
                    {
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group">
                            <label>Person Phone</label>
                            <input className="myInp" placeholder="Person Phone..." name="phone" value={this.state.phone} onChange={this.dueControl} />
                        </div> : ''
                    }
                    {
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group">
                            <label>Person Address</label>
                            <input className="myInp" placeholder="Person Address..." name="address" value={this.state.address} onChange={this.dueControl} />
                        </div> : ''
                    }
                    {
                        this.state.payer_type !== "" && this.state.payer_type === "new" ?
                        <div className="form-group ">
                            <label>Person NIC</label>
                            <input className="myInp" placeholder="Person NIC..." name="nic" value={this.state.nic} onChange={this.dueControl} />
                        </div> : ''
                    }
                    <div className="form-group">
                        <label>Due Amount</label>
                        <input className="myInp" placeholder="Due Amount..." name="amount" value={this.state.amount} onChange={this.dueControl} />
                    </div>
                    <div className="form-group">
                        <label>Product Bought</label>
                        <input className="myInp" placeholder="Product Bought..." name="product" value={this.state.product} onChange={this.dueControl} />
                    </div>
                    <div className="form-group">
                        <label>Due Start Date</label>
                        <input type="date" className="myInp" placeholder="Due Start Date..." name="start_date" value={this.state.start_date} onChange={this.dueControl} />
                    </div>
                    <div className="form-group">
                        <label>Due End Data</label>
                        <input type="date" className="myInp" placeholder="Due End Date..." name="end_date" value={this.state.end_date} onChange={this.dueControl} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary"> Submit Due </button>
                    </div>
                </form>


            </>
        )
    }
}

export default NewDues
