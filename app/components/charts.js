import React from 'react';
import CHMSHighchart from './reuseable/highchart';
import ApiAddresses from '../utils/api-address';
import * as actions from '../redux/actions/highchart';
import {Row,Col} from 'react-bootstrap';
import SportSelect from '../components/subcomponents/sport-select';
import StateSelect from '../components/subcomponents/state-select';
import UpdateButton from './reuseable/update';

const CHMSFoodWebChartConfig = {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Nutrient Content of Top Two Foods',
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Water', 'Sugars', 'Protein', 'Fat',
            'Carbohydrate', 'Fiber'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: []

};

export class CHMSFoodWebChart extends React.Component {

    render() {
        const callback = () => {
            this.refs.chart.getWrappedInstance().updateChart({data: {choice: this.refs.state1.getSelectValue()}});
        };
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <StateSelect ref="state1" label="State"/>
                        <UpdateButton updateOnClick={callback}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'food'} apiAddress={ApiAddresses.foodWebChart}
                                       initConfig={CHMSFoodWebChartConfig}
                                       initOptionData={{data:{choice: 'us-al'}}} {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}

const CHMSSportBarChartConfig = {

    chart: {
        type: 'bar'
    },

    title: {
        text: 'The Amount of Top Sports',
        x: -80
    },

    xAxis: {
        categories: [], //TODO dynamic
        title: {
            text: null
        }
    },

    yAxis: {},
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        floating: true,
        align: 'right',
        verticalAlign: 'top',
        y: 0,
        layout: 'vertical'
    },
    credits: {
        enabled: false
    },
    series: []

};

export class CHMSSportBarChart extends React.Component {

    render() {
        const callback = () => {
            this.refs.chart.getWrappedInstance().updateChart({data: {choice: this.refs.state1.getSelectValue()}});
        };
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <StateSelect ref="state1" label="State"/>
                        <UpdateButton updateOnClick={callback}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'sport'} apiAddress={ApiAddresses.sportBarChart}
                                       initConfig={CHMSSportBarChartConfig}
                                       initOptionData={{data:{choice: 'us-al'}}} {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}

const CHMSStateExerciseChartConfig = {

    chart: {
        type: 'line'
    },

    title: {
        text: 'The Amount of Exercise of Two State',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: [],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: []

};

export class CHMSStateExerciseChart extends React.Component {

    render() {
        const callback = () => {
            this.refs.chart.getWrappedInstance().updateChart({
                data: {
                    choice1: this.refs.state1.getSelectValue(),
                    choice2: this.refs.state2.getSelectValue()
                }
            });
        };
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <StateSelect ref="state1" label="State"/>
                        <StateSelect ref="state2" label="State"/>
                        <UpdateButton updateOnClick={callback}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'stateExercise'} apiAddress={ApiAddresses.stateExerciseChart}
                                       initConfig={CHMSStateExerciseChartConfig}
                                       initOptionData={{data: {choice1: 'us-in', choice2: 'us-ny'}}} {...this.props}
                                       isPureConfig/>

                    </Col>
                </Row>
            </div>
        );
    }

}

const CHMSSportExerciseChartConfig = {

    chart: {
        type: 'line'
    },

    title: {
        text: 'The Amount of Exercise of Two Sport',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: [],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: []
};


export class CHMSSportExerciseChart extends React.Component {

    render() {
        const callback = () => {
            this.refs.chart.getWrappedInstance().updateChart({
                data: {
                    choice1: this.refs.state1.getSelectValue(),
                    choice2: this.refs.sport1.getSelectValue(),
                    choice3: this.refs.sport2.getSelectValue()
                }
            });
        };
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <StateSelect ref="state1" label="State"/>
                        <SportSelect ref="sport1" label="Sport1"/>
                        <SportSelect ref="sport2" label="Sport2"/>
                        <UpdateButton updateOnClick={callback}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'sportExercise'} apiAddress={ApiAddresses.sportExerciseChart}
                                       initConfig={CHMSSportExerciseChartConfig}
                                       initOptionData={{data:{choice1: 'us-ca',choice2: 'BaseBall',choice3: 'Basketball'}}} {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}


const CHMSNutrientBarChartConfig = {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Nutrient Content',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: [
            "cluster1",
            "cluster2",
            "cluster3",
            "cluster4"
        ],
        crosshair: true
    },

    yAxis: {
        min: 0,
        title: {
            text: 'Weight(g)'
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} g</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

    series: [
        {
            "name": "Fat",
            "data": [
                11.33467514,
                51.80339,
                37.64861281,
                34.2512

            ]
        },
        {
            "name": "Protein",
            "data": [
                5.643521682,
                7.895896226,
                18.99285237,
                12.13553

            ]
        },
        {
            "name": "Sugar",
            "data": [
                16.83265294,
                55.76996331,
                14.41324791,
                22.54111
            ]
        },
        {
            "name": "Water",
            "data": [
                30.07026456,
                12.07709329,
                14.50609201,
                18.68177

            ]
        },
        {
            "name": "Carbohydrate",
            "data": [
                41.60963206,
                75.41879455,
                53.14436119,
                52.84133


            ]
        },
        {
            "name": "Fiber",
            "data": [
                1.856430136,
                2.021475367,
                4.741359331,
                3.26794
            ]
        }
    ]

};

export class CHMSNutrientBarChart extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'nutrient'} apiAddress={null}
                                       initConfig={CHMSNutrientBarChartConfig}
                            {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}


const CHMSProfileFoodChartConfig = {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Nutrient Content of Top Two Foods',
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Water', 'Sugars', 'Protein', 'Fat',
            'Carbohydrate', 'Fiber'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: []

};

export class CHMSProfileFoodChart extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'profileFood'} apiAddress={null}
                                       initConfig={CHMSProfileFoodChartConfig}
                            {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}


const CHMSIndexFoodChartConfig = {

    chart: {
        polar: true,
        type: 'line',
        width: 400,
        height: 300
    },

    title: {
        text: 'Nutrient Content',
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Water', 'Sugars', 'Protein', 'Fat',
            'Carbohydrate', 'Fiber'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: [{
        "name": "Big City",
        "data": [3424,
            342,
            2342,
            4566,
            2344,
            5080
        ]
    }, {
        "name": "Big City",
        "data": [1424,
            5655,
            3243,
            7786,
            4553,
            1123
        ]
    }]
}
;

export class CHMSIndexFoodChart extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'indexFood'} apiAddress={null}
                                       initConfig={CHMSIndexFoodChartConfig}
                            {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}


const CHMSIndexBarChartConfig = {

    chart: {
        type: 'column',
        width: 400,
        height: 300
    },

    title: {
        text: 'Exercise Amount',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        crosshair: true
    },

    yAxis: {
        min: 0,
        title: {
            text: 'Amount'
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} g</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },

    series: [
        {
            "name": "Big City",
            "data": [3424]
        },
        {
            "name": "Leisure City",
            "data": [6756]
        }
    ]

};

export class CHMSIndexBarChart extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'indexNutrient'} apiAddress={null}
                                       initConfig={CHMSIndexBarChartConfig}
                            {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}


const CHMSSentimentChartConfig = {

    chart: {
        type: 'line'
    },

    title: {
        text: 'Sentiment Line Chart',
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: [],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: []

};

export class CHMSSentimentChart extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <CHMSHighchart ref="chart" uid={'sentimentChart'} apiAddress={null}
                                       initConfig={CHMSSentimentChartConfig}
                            {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );
    }

}

//TODO All charts are here

