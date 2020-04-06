import React, { Component } from 'react'
import './dues.scss'

import Links from '../../../Shared/Elements/links/links'
import {Route, Redirect} from 'react-router-dom'

//Components
import AllDues from './all/all'
import PayDue from './pay/pay'
import NewDue from './new/new'
import OldDues from './old/old'
import DuesHistory from './history/history'

export class dues extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           links : []  
        }
    }

    componentDidMount(){
        let l = [
            {path: "/app/dues/all", label: "All Dues", icon: "far fa-folder-open"},
            {path: "/app/dues/new", label: "New Due", icon: "fas fa-folder-plus"},
            {path: "/app/dues/pay", label: "Pay Due", icon: "fas fa-folder-minus"},
            {path: "/app/dues/old", label: "Over Dues", icon: "fas fa-folder-open"},
            {path: "/app/dues/history", label: "Dues History", icon: "fas fa-history"}
        ]
        this.setState({
            links : l
        })
    }
    
    render() {
        return (
            <div className="container-fluid dues">
                <div className="row">
                    <div className="col-12">
                        <div className="big-head"> <i className="fas fa-money-bill-alt"></i> Dues</div>
                    </div>
                    <div className="col-2">
                        <Links data={this.state.links} />
                    </div>
                    <div className="col-10">
                        <Route exact path="/app/dues" render={ () => <Redirect to="/app/dues/all" />} />
                        <Route path="/app/dues/all" component={AllDues} />
                        <Route path="/app/dues/new"  component={NewDue} />
                        <Route path="/app/dues/pay"  component={PayDue} />
                        <Route path="/app/dues/old"  component={OldDues} />
                        <Route path="/app/dues/history" component={DuesHistory} />
                    </div>
                </div>
            </div>
        )
    }
}

export default dues
