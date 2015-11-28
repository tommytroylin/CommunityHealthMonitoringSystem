import React from 'react';
import CHMSHighchart from './reuseable/highchart'
import ApiAddresses from '../utils/api-address';

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
        return (
            <div>
                <CHMSHighchart uid={'food'} apiAddress={ApiAddresses.foodWebChart}
                             initConfig={CHMSFoodWebChartConfig} {...this.props}
                             isPureConfig/>

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

    yAxis: {


    },
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
        return (
            <div>
                <CHMSHighchart uid={'sport'} apiAddress={ApiAddresses.foodWebChart}
                               initConfig={CHMSSportBarChartConfig} {...this.props}
                               isPureConfig/>

            </div>
        );

    }
}

