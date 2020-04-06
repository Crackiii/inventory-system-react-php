import React, { Component } from 'react'
import './stock.scss'
import {Ajax} from '../../../Shared/Services/ajax'

export class stock extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cards : []
        }

    }

    componentDidMount(){
        this.getStockReport()
    }

    async getStockReport(){

        let response = await new Ajax().get("reports", "stock-report", "all")
        this.setState({
            cards : response
        })
        
    }
    
    render() {
        return (
            <div className="stock">
                <div className="row">
                    <div className="col-12">
                        <div className="big-head"> <i className="fas fa-boxes"></i> Stock Report </div>
                    </div>
                    {
                        
                        this.state.cards.map( (item, idx) => {
                            
                            return(
                                <div className="col-4" key={idx}>
                                    <div className={`stock-card ${item.color}`}>
                                     <div className="flex-row-space st-card-head">
                                            <div className="name"> <i className="fas fa-dice-d20"></i> {item.name}</div>
                                            <div className="stock-amount">{item.entries - item.transactions} Packs ({(item.entries - item.transactions) * 90} Meters)</div>
                                        </div>
                                        <div className="flex-row-space availability">
                                            <div className="">Stock <span>{item.entries - item.transactions} Packs - {(item.entries - item.transactions)/200 * 100}%</span></div>
                                            <div className="">Required <span>200 Packs</span></div>
                                        </div>
                                        <div className="flex-row-right last-update">
                                            <div className="date">Last Entry - {new Date(parseInt(item.last_entry)).toGMTString()}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default stock
