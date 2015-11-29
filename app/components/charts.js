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
                                       initOptionData={{choice1: 'us-ca',choice2: 'BaseBall',choice3: 'Basketball'}} {...this.props}
                                       isPureConfig/>
                    </Col>
                </Row>
            </div>
        );

    }
}
