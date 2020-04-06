import React, { Component } from 'react'
import './navbar.scss'

export class navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row navbar">
                    <div className="col-12">
                        <div className="">AL - NOOR ELECTRONICS</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default navbar
