import React, { Component } from 'react'
import './links.scss'
import {NavLink} from 'react-router-dom'

export class links extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             links : []
        }
    }

    componentDidMount(){
        this.setState({
            links : this.props.data
        })
    }
    
    render() {
        return (
            <div className="entry-links">
                <ul>
                    {
                        this.props.data.map( (link, idx) => {
                            return(
                                <li key={idx}>
                                    <NavLink to={link.path} activeClassName="active-link" > <i className={link.icon}></i> <span>{link.label}</span> </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default links
