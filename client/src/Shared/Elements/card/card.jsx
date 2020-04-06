import React, { Component } from 'react'
import './card.scss'
import Chart from '../../../Shared/Elements/charts/chart'

export class card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {

        return (
            <div className="card">
                <div className="flex-row-space">
                    <div className="head">{this.props.head}</div>
                    <div className="amount">RS.{this.props.amount}</div>
                </div>
                <div className="data">
                    {this.props.data}
                </div>
                <div className="chart">
                    <Chart id={this.props.id} type={'line'} yAxes={this.props.yA} xAxes={this.props.xA} gridLinesX={this.props.gLX} gridLinesY={this.props.gLY} data={this.props.chartData} height={this.props.height} />
                </div>
            </div>
        )
    }
}

export default card
