import React, { Component } from 'react'
import './others.scss'
import Input from '../../../../Shared/Elements/input/input'
import {salert} from '../../../../Shared/sweetalert'

export class others extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            category: '',
            company: '',
            stock: '',
            unit_price: '',
            sales_price: '',
            comment: '',
            activeRoute: window.location.pathname.split("/")[window.location.pathname.split("/").length-1]
        }
        this.entryInput = this.entryInput.bind(this)
        this.othersSubmit = this.othersSubmit.bind(this)
    }

    entryInput(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    othersSubmit(event){
        if(
            this.state.name !== '' &&
            this.state.category !== '' &&
            this.state.company !== '' &&
            this.state.stock !== '' &&
            this.state.unit_price !== '' &&
            this.state.comment !== ''
        ){
            this.props.onData(this.state)
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
                        placeholder="Name of the Product"
                        label="Product Name"
                        required={true}
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.entryInput}
                    />
                </div>
                <div className="col-6">
                    <Input 
                        type="text"
                        placeholder="Category of the Product"
                        label="Product Category"
                        required={true}
                        name="category"
                        id="category"
                        value={this.state.category}
                        onChange={this.entryInput}
                    />
                </div>
                <div className="col-6">
                    <Input 
                        type="text"
                        placeholder="Company or the Supplier Name "
                        label="Company / Supplier"
                        required={true}
                        name="company"
                        id="company"
                        value={this.state.company}
                        onChange={this.entryInput}
                    />
                </div>
                <div className="col-6">
                    <Input 
                        type="text"
                        placeholder="Stock that has been delivered ?"
                        label="Stock Supplied"
                        required={true}
                        name="stock"
                        id="stock"
                        value={this.state.stock}
                        onChange={this.entryInput}
                    />
                </div>
                <div className="col-6">
                    <Input 
                        type="text"
                        placeholder="The price per item"
                        label="Unit Price"
                        required={true}
                        name="unit_price"
                        id="unit_price"
                        value={this.state.unit_price}
                        onChange={this.entryInput}
                    />
                </div>
                <div className="col-6">
                    <Input 
                        type="text"
                        placeholder="Additional Comments about the product"
                        label="Product Comment"
                        required={true}
                        name="comment"
                        id="comment"
                        value={this.state.comment}
                        onChange={this.entryInput}
                    />
                </div>
                <div className="col-12">
                    <div className="total-text">
                        You are going to make entry of 51 Packs, Goodman Cables, which is 3491 Meteres, and the price per meter is RS.145 which is total of RS.140,000.
                    </div>
                    <hr />
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <button className="btn btn-danger" onClick={this.othersSubmit}>Make Transaction Now</button>
                    </div>
                </div>
            </>
        )
    }
}

export default others
