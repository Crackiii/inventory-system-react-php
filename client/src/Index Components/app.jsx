import React, { Component } from 'react'
import './app.scss'
import {Route, Redirect} from 'react-router-dom'

import NavBar from '../Shared/Elements/navbar/navbar'
import Table from '../Shared/Elements/links-table/links-table'

import Overview from './App Components/overview/overview'
import Entries from './App Components/entries/entries'
import Withdraw from './App Components/withdraw/withdraw'
import Stock from './App Components/stock/stock'
import Sales from './App Components/sales/sales'
import Search from './App Components/search/search'
import Dues from './App Components/dues/dues'
import Settings from './App Components/settings/settings'
import Help from './App Components/help/help'
import About from './App Components/about/about'

export class app extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             works: "this works for me"
        }
    }
    
    render() {
        return (
            <div>
                <NavBar  />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 links-table">
                            <Table />
                        </div>
                        <div className="col-10 right-contents">
                            <Route exact path="/app" render={ () => <Redirect to="/app/overall" /> } />
                            <Route path="/app/overall"   component={Overview} />
                            <Route path="/app/entries"   component={Entries} />
                            <Route path="/app/withdraw"  component={Withdraw} />
                            <Route path="/app/stock"     component={Stock} />
                            <Route path="/app/sales"     component={Sales} />
                            <Route path="/app/search"    component={Search} />
                            <Route path="/app/dues"      component={Dues} />
                            <Route path="/app/settings"  component={Settings} />
                            <Route path="/app/help"      component={Help} />
                            <Route path="/app/about"     component={About} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default app
