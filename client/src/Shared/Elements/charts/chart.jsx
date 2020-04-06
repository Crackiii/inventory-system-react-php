import React, { Component } from 'react'
import Chart from 'chart.js'

export class chartjs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){
        const ctx = document.getElementById(`${this.props.id}`).getContext('2d');
        new Chart(ctx,{
            type: `${this.props.type}`,
            data: {
                labels: [...this.props.data.labels],
                datasets: [{
                    label: 'khan',
                    data: [...this.props.data.data],
                    backgroundColor: [...this.props.data.backgroundColor],
                    borderColor: [...this.props.data.borderColor],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: this.props.xAxes,
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines : {
                            display:this.props.gridLinesX
                        },
                        scaleLabel : false
                    }],
                    xAxes: [{
                        display: this.props.yAxes,
                        ticks : {
                            beginAtZero : true
                        },
                        gridLines : {
                            display:this.props.gridLinesY
                        }
                    }]
                },
                legend: {
                    display: false,
                },
                animation : {
                    easing : 'easeInCirc'
                },
                tooltips : {
                    backgroundColor : '#006699',
                    cornerRadius : 5,
                    borderWidth : 0
                },
                
            }
        })
    }

    render() {
        return (
            <div style={{'marginTop' : '30px'}}>
                <canvas id={this.props.id} height={this.props.height}></canvas>
            </div>
        )
    }
}

export default chartjs
