import React, { Component } from 'react'
import './overview.scss'
import Select from 'react-select'
import Card from '../../../Shared/Elements/card/card'
// import Chart from '../../../Shared/Elements/charts/chart'

export class overview extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             inventorySelect : []
        }

    }

    componentDidMount(){
        const invSel = [
            {value:'daily', label:'Daily Report'},
            {value:'weekly', label:'Weekly Report'},
            {value:'monthly', label:'Mothly Report'},
            {value:'yearly', label:'Yearly Report'}
        ]
        this.setState({
            inventorySelect : invSel
        })
    }
    
    render() {

        const rand = () => Math.round(Math.random() * 100) + 1
        
        const fastCables = {
            data : [rand(),rand(),rand(),rand(),rand(),rand()],
            labels : [1,2,3,4,5,6],
            backgroundColor : ['rgba(255, 99, 132, 0.2)'],
            borderColor : ['rgba(255, 99, 132, 1)']
        }

        const pakistanCables = {
            data : [rand(),rand(),rand(),rand(),rand(),rand()],
            labels : [1,2,3,4,5,6],
            backgroundColor : ['rgba(45, 206, 137, 0.3)'],
            borderColor : ['#2dce89']
        }

        const bestwayCables = {
            data : [rand(),rand(),rand(),rand(),rand(),rand()],
            labels : [1,2,3,4,5,6],
            backgroundColor : ['rgba(17, 205, 239, 0.3)'],
            borderColor : ['#11cdef']
        }

        const goodmanCables = {
            data : [rand(),rand(),rand(),rand(),rand(),rand()],
            labels : [1,2,3,4,5,6],
            backgroundColor : ['rgba(251, 99, 64, 0.2)'],
            borderColor : ['#fb6340']
        }

        const importedCables = {
            data : [rand(),rand(),rand(),rand(),rand(),rand()],
            labels : [1,2,3,4,5,6],
            backgroundColor : ['rgba(86, 3, 173, 0.2)'],
            borderColor : ['#5603ad']
        }

        const otherStuff = {
            data : [rand(),rand(),rand(),rand(),rand(),rand()],
            labels : [1,2,3,4,5,6],
            backgroundColor : ['rgba(94, 114, 228, 0.3)'],
            borderColor : ['#5e72e4']
        }

        return (
            <>
            <div className="row overview-row">
                <div className="col-12">
                    <div className="flex-row-space top-header">
                        <div className="big-head">Sales Inventory</div>
                        <Select options={this.state.inventorySelect} placeholder="Show Report" />
                    </div>
                </div>
                <div className="col-4">
                    <Card 
                        head="Fast Cables" 
                        amount="72000" 
                        data="81 Packs (1341 Meters)"
                        id="chart1"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={fastCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Pakistan Cables" 
                        amount="89000" 
                        data="43 Packs (2190 Meters)"
                        id="chart2"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={pakistanCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Bestway Cables" 
                        amount="31200" 
                        data="78 Packs (1131 Meters)"
                        id="chart3"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={bestwayCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Goodman Cables" 
                        amount="98000" 
                        data="13 Packs (119 Meters)"
                        id="chart4"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={goodmanCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Imported Cables" 
                        amount="26000" 
                        data="18 Bundles (64 KGs)"
                        id="chart5"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={importedCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Other Stuff" 
                        amount="26000" 
                        data="Different Categories"
                        id="chart6"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={otherStuff}
                    />
                </div>
            </div>
            <div className="row overview-row">
                <div className="col-12">
                    <div className="flex-row-space top-header">
                        <div className="big-head">Stock Inventory</div>
                        <Select options={this.state.inventorySelect} placeholder="Show Report" />
                    </div>
                </div>
                <div className="col-4">
                    <Card 
                        head="Fast Cables" 
                        amount="72000" 
                        data="81 Packs (1341 Meters)"
                        id="chart7"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={fastCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Pakistan Cables" 
                        amount="89000" 
                        data="43 Packs (2190 Meters)"
                        id="chart8"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={pakistanCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Bestway Cables" 
                        amount="31200" 
                        data="78 Packs (1131 Meters)"
                        id="chart9"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={bestwayCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Goodman Cables" 
                        amount="98000" 
                        data="13 Packs (119 Meters)"
                        id="chart10"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={goodmanCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Imported Cables" 
                        amount="26000" 
                        data="18 Bundles (64 KGs)"
                        id="chart11"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={importedCables}
                    />
                </div>
                <div className="col-4">
                    <Card 
                        head="Other Stuff" 
                        amount="26000" 
                        data="Different Categories"
                        id="chart12"
                        yA={false}
                        xA={false}
                        gLX={false}
                        gLY={false}
                        height="150px"
                        chartData={otherStuff}
                    />
                </div>
            </div>
            </>
        )
    }
}

export default overview
