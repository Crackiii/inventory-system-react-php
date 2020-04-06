import React, { Component } from 'react'
import { Ajax } from '../../../../Shared/Services/ajax'

export class all extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    async componentDidMount(){

        let response = await new Ajax().get("reports", "", "dues-report-all");

        console.log(response);

    }
    
    render() {
        return (
            <div className="dues">
                
            </div>
        )
    }
}

export default all
