import React from 'react';
import CHMSHeatMap from './reuseable/heat-map'
import { USAll as mapDataUSAll } from '../utils/map-data-us-all';
import ApiAddresses from '../utils/api-address';
import {Highcharts} from 'react-highcharts/bundle/highmaps';

const CHMSHeatMap1Config = {
    title: {
        text: 'Heat Map for The Amount of Exercise'
    },

    subtitle: {
        text: 'USA',
        floating: true,
        align: 'right',
        y: 50,
        style: {
            fontSize: '16px'
        }
    },

    loading: {
        labelStyle: {
            color: 'white'
        },
        style: {
            backgroundColor: 'gray'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    colorAxis: {
        min: 0,
        minColor: '#E6E7E8',
        maxColor: '#005645'
    },

    mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    plotOptions: {
        map: {
            states: {
                hover: {
                    color: '#EEDD66'
                }
            }
        }
    },

    series: [{
        data: [], //TODO handle data
        mapData: mapDataUSAll, //TODO handle map data
        joinBy: 'hc-key',
        name: 'The Amount of Exercise',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(mapDataUSAll, 'mapline'),
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
    }]


};


export class CHMSHeatMap1 extends React.Component {
    render() {
        return <CHMSHeatMap apiAddress={ApiAddresses.heatMap1} initConfig={CHMSHeatMap1Config} {...this.props}
                            isPureConfig/>
    }
}
