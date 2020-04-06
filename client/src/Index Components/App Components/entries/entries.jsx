import React, { Component } from 'react'
import './entries.scss'
import Links from '../../../Shared/Elements/links/links'
import {Route, Redirect} from 'react-router-dom' 

import BarcodeEntry from './barcode/barcode'
import ManualEntry from './manual/manual'

export class entries extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             l : []
        }
    }

    componentDidMount(){
        const l = [
            {path : '/app/entries/barcodeEntry', label : 'Barcode Entry', icon : 'fas fa-barcode'},
            {path : '/app/entries/manualEntry', label : 'Manual Entry', icon : 'fab fa-buffer'},
        ]
        this.setState({
            l : l
        })
    }
    
    render() {
        return (
            <div className="entries">
                <div className="row">
                    <div className="col-12">
                        <div className="big-head"> <i className="far fa-plus-square"></i> Make Entry </div>
                    </div>
                    <div className="col-2">
                        <Links data={this.state.l} />
                    </div>
                    <div className="col-8">
                        <Route exact path="/app/entries" render={()=> <Redirect to="/app/entries/barcodeEntry" />} />
                        <Route path="/app/entries/barcodeEntry" component={BarcodeEntry} />
                        <Route path="/app/entries/manualEntry" component={ManualEntry} />
                    </div>
                </div>
            </div>
        )
    }
}

export default entries
