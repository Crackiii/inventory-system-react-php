import React, { Component } from 'react'
import './cables.scss'
import Select from 'react-select'
import {company, color, core} from '../../../../Shared/Data/entries'
import { Ajax } from '../../../../Shared/Services/ajax'

export class cables extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            barcode: '', 
            size: '',
            company_sel: '',
            color_sel: '',
            core_sel: '',
            data : []
        }


        this.cabSearchControl = this.cabSearchControl.bind(this)
        this.cabSearchSelect = this.cabSearchSelect.bind(this)
        this.cabsSearchSubmit = this.cabsSearchSubmit.bind(this)
    }

    cabSearchControl(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    cabSearchSelect(event, value){
        this.setState({
            [value.name]:event.value
        })
    }

    async cabsSearchSubmit(event){
        event.preventDefault()
        let sendData = {
            barcode: this.state.barcode, 
            size: this.state.size,
            company_sel: this.state.company_sel,
            color_sel: this.state.color_sel,
            core_sel: this.state.core_sel
        }
        let response = await new Ajax().get("search", sendData, "cables-search")
        console.log(response);

        this.setState({
            data : response
        })
    }
    
    render() {
        return (
            <>
            <form className="row" onSubmit={this.cabsSearchSubmit}>
                <div className="form-group col-2">
                    <label>Barcode Search</label>
                    <input type="text" className="myInp" placeholder="Barcode Value" name="barcode" value={this.state.barcode} onChange={this.cabSearchControl} />
                </div>
                <div className="form-group col-2">
                    <label>Size (in mm)</label>
                    <input type="text" className="myInp" placeholder="Size Value" name="size" value={this.state.size} onChange={this.cabSearchControl} />
                </div>
                <div className="form-group col-2">
                    <label>Company</label>
                    <Select options={company} name="company_sel" onChange={this.cabSearchSelect} />
                </div>
                <div className="form-group col-2">
                    <label>Color</label>
                    <Select options={color} name="color_sel" onChange={this.cabSearchSelect} />
                </div>
                <div className="form-group col-2">
                    <label>Core</label>
                    <Select options={core} name="core_sel" onChange={this.cabSearchSelect} />
                </div>
                <div className="form-group col-2">
                    <label className="last">label</label>
                    <button className="btn btn-dribbble"><i className="fas fa-search"></i></button>
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
                                        <th className="column1">Company / Supplier</th>
                                        <th className="column2">Size (mm)</th>
                                        <th className="column3">Barcode</th>
                                        <th className="column4">Color</th>
                                        <th className="column5">Core</th>
                                        <th className="">Stock</th>
                                        <th>Sales Price</th>
                                        <th className="column6">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.data.map( (item, idx) => {
                                                return(
                                                    <tr className="col-3" key={idx}>
                                                            <td className="column1 name">{item.company.toUpperCase()} Cables</td>
                                                            <td className="column2 category">{item.size_mm}</td>
                                                            {
                                                                item.is_barcoded === "1" ? 
                                                                <td className="column3 barcode">{item.barcode_no}</td> : 
                                                                <td className="column3 barcode" > --- </td>
                                                            }
                                                            <td className="column4 price">{item.color}</td>
                                                            <td className="column5 company">{item.core}</td>
                                                            {
                                                                item.bundles_received === null ?
                                                                <td className="">{item.packs_recieved} Packs </td>:
                                                                <td className="">{item.bundles_received} Bundles</td>
                                                            }
                                                            {
                                                                item.sales_price_per_kg === null ?
                                                                <td>RS. {item.sales_price_per_meter} / Meter</td> : 
                                                                <td>RS. {item.sales_price_per_kg} / KG</td>  
                                                            }
                                                            <td className="column6 comment">{new Date(parseInt(item.timestamp)).toGMTString()}</td>
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

export default cables
