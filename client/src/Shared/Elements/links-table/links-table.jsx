import React, { Component } from 'react'
import './links-table.scss'
import {NavLink} from 'react-router-dom'
import CablesIcon from '../../../Assets/images/cables.png'

export class LinksTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           links : []  
        }

    }

    componentDidMount(){
        const l = [
            {'path' : '/app/overall', label : 'Over All', icon : 'fas fa-chart-pie'},
            {'path' : '/app/entries', label : 'Entries', icon : 'fas fa-plus-circle'},
            {'path' : '/app/withdraw', label : 'Withdraw', icon : 'fas fa-minus-circle'},
            {'path' : '/app/stock', label : 'Stock', icon : 'fas fa-box-open'},
            {'path' : '/app/sales', label : 'Sales', icon : 'fas fa-bullhorn'},
            {'path' : '/app/search', label : 'Search', icon : 'fas fa-search'},
            {'path' : '/app/dues', label : 'Dues', icon : 'fas fa-money-bill-alt'},
            {'path' : '/app/settings', label : 'Settings', icon : 'fas fa-cog'},
            {'path' : '/app/help', label : 'Help', icon : 'fas fa-info-circle'},
            {'path' : '/app/about', label : 'About', icon : 'fas fa-quote-right'}
        ]
        this.setState({
            links : l
        })
    }
    
    render() {
        return (
            <div className="">
                <div className="table-head">
                    <img src={CablesIcon} alt='icon' />
                </div>
                <ul>
                    {
                        this.state.links.map( (link, idx) => {
                            return(
                                <li key={idx}>
                                    <NavLink activeClassName="active-link" to={link.path}> <i className={link.icon}></i> <span>{link.label}</span></NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default LinksTable
