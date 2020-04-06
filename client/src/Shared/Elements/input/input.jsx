import React, { Component } from 'react'
import './input.scss'

export class input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input 
                    type={this.props.type} 
                    placeholder={this.props.placeholder} 
                    required={this.props.required}
                    id={this.props.id}
                    className="myInp"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    name={this.props.name}
                    autoComplete="off"
                />
            </div>
        )
    }
}

export default input
