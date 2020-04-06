import React, { Component } from 'react'
import './search.scss'
import Links from '../../../Shared/Elements/links/links'
import {Route, Redirect} from 'react-router-dom' 

//components
import Cables from './cables-search/cables'
import Products from './products-search/products'

export class search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             l : []
        }
    }

    componentDidMount(){
        const l = [
            {path : '/app/search/cables', label : 'Cables Search', icon : 'fas fa-barcode'},
            {path : '/app/search/products', label : 'Products Search', icon : 'fab fa-buffer'},
        ]
        this.setState({
            l : l
        })
    }
    
    render() {
        return (
            <div className="search">
                <div className="row">
                    <div className="col-12">
                        <div className="big-head"> <i className="fas fa-search"></i> Search Your Database </div>
                    </div>
                    <div className="col-2">
                        <Links data={this.state.l}  />
                    </div>
                    <div className="col-10">
                        <Route exact path="/app/search" render={()=> <Redirect to="/app/search/cables" />} />
                        <Route path="/app/search/cables" component={Cables} />
                        <Route path="/app/search/products" component={Products} />
                    </div>
                </div>
            </div>
        )
    }
}

export default search
