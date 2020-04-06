import React, { Component } from 'react'
import './products.scss'
import { Ajax } from '../../../../Shared/Services/ajax'
export class products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            barcode: '', 
            name: '',
            category: '',
            company: '',
            data : []
        }
        this.prodSearchControl = this.prodSearchControl.bind(this)
        this.prodSearchSubmit = this.prodSearchSubmit.bind(this)
    }

    prodSearchControl(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    async prodSearchSubmit(event){
        event.preventDefault()

        let response = await new Ajax().get("search", this.state, "products-search")

        this.setState({
            data : response
        })


    }
    
    render() {
        return (
            <>
            <form className="row" onSubmit={this.prodSearchSubmit}>
                <div className="form-group col-2">
                    <label>Barcode Search</label>
                    <input type="text" className="myInp" placeholder="Barcode Value" name="barcode" value={this.state.barcode} onChange={this.prodSearchControl} />
                </div>
                <div className="form-group col-2">
                    <label>Product Name</label>
                    <input type="text" className="myInp" placeholder="Product Name" name="name" value={this.state.name} onChange={this.prodSearchControl} />
                </div>
                <div className="form-group col-3">
                    <label>Product Category</label>
                    <input type="text" className="myInp" placeholder="Product Category" name="category" value={this.state.category} onChange={this.prodSearchControl} />
                </div>
                <div className="form-group col-3">
                    <label>Product Company</label>
                    <input type="text" className="myInp" placeholder="Product Company" name="company" value={this.state.company} onChange={this.prodSearchControl} />
                </div>
                <div className="form-group col-2">
                    <label className="last">label</label>
                    <button className="btn btn-facebook"><i className="fas fa-search"></i></button>
                    <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </div>
            </form>

            { 
                this.state.data.length > 0 && this.state.data[0] !== 0 ? 
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">
                            <div className="table100">
                                <table>
                                    <thead>
                                        <tr className="table100-head">
                                        <th className="column1">Name</th>
                                        <th className="column2">Category</th>
                                        <th className="column3">Barcode</th>
                                        <th className="column4">Price</th>
                                        <th className="column5">Company</th>
                                        <th className="column6">Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.data.map( (item, idx) => {
                                                return(
                                                    <tr className="col-3" key={idx}>
                                                            <td className="column1 name">{item.product_name}</td>
                                                            <td className="column2 category">{item.product_category}</td>
                                                            {
                                                                item.is_barcoded === "1" ? 
                                                                <td className="column3 barcode">{item.barcode_no}</td> : 
                                                                <td className="column3 barcode" style={{"textAlign":"center"}}> - </td>
                                                            }
                                                            <td className="column4 price">{item.sales_price}</td>
                                                            <td className="column5 company">{item.company_name}</td>
                                                            <td className="column6 comment">{item.comment}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> : 
                this.state.data[0] === 0 ?
                <h3>No Products Found !</h3> : ''
                
            }

            </>
        )
    }
}

export default products