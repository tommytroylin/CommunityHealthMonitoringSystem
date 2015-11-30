import React from 'react';
import CHMSHeatMap from './reuseable/highmap'
import {USAll as mapDataUSAll} from '../utils/map-data-us-all';
import ApiAddresses from '../utils/api-address';
import $ from 'jquery';

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
        return (
            <div>
                <CHMSHeatMap uid={'Heat1'} apiAddress={ApiAddresses.heatMap1}
                             initConfig={CHMSHeatMap1Config} {...this.props}
                             isPureConfig/>

            </div>
        );
    }

}

const CHMSHeatMap2Config = {
    title: {
        text: 'Heat Map for The Amount of Junk Food'
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
        data: [],
        mapData: mapDataUSAll,
        joinBy: 'hc-key',
        name: 'The Amount of Junk Food',
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
        data: window.Highcharts.geojson(mapDataUSAll, 'mapline'),
        color: 'silver',
        showInLegend: false,
        enableMouseTracking: false
    }]


};

export class CHMSHeatMap2 extends React.Component {

    render() {
        return (
            <div>
                <CHMSHeatMap uid={'Heat2'} apiAddress={ApiAddresses.heatMap2}
                             initConfig={CHMSHeatMap2Config} {...this.props}
                             isPureConfig/>

            </div>
        );
    }

}

const CHMSClusteringMapConfig = {
    chart: {
        spacingBottom: 20
    },
    title: {
        text: 'Clustering Map'
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        map: {
            allAreas: false,
            joinBy: ['hc-key', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                formatter: function () {
                    if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                        return this.point.properties['iso-a2'];
                    }
                },
                format: null,
                style: {
                    fontWeight: 'bold'
                }
            },
            mapData: mapDataUSAll,
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}: <b>{series.name}</b>'
            }

        }
    },

    series: [{
        name: 'default',
        data: $.map(['us-wa', 'us-nm', 'us-ut', 'us-ca', 'us-tn', 'us-id', 'us-az', 'us-wy', 'us-nd', 'us-sd', 'us-ky', 'us-tx', 'us-fl', 'us-ga', 'us-hi', 'us-il', 'us-ar', 'us-mi', 'us-in', 'us-oh', 'us-ny', 'us-vt', 'us-nh', 'us-ma', 'us-ct', 'us-ri', 'us-pa', 'us-nj', 'us-de', 'us-md', 'us-wv', 'us-va', 'us-nc', 'us-tz'], function (code) {
            return {code: code};
        })
    }, {
        name: 'cluster1',
        data: $.map(['us-or', 'us-nv', 'us-mt', 'us-co', 'us-wi', 'us-sc'], function (code) {
            return {code: code};
        })
    }, {
        name: 'cluster2',
        data: $.map(['us-la', 'us-ms', 'us-ok', 'us-ar', 'us-al', 'us-me'], function (code) {
            return {code: code};
        })
    }, {
        name: 'cluster3',
        data: $.map(['us-ak', 'us-ne', 'us-ks', 'us-ia', 'us-mo', 'us-mn'], function (code) {
            return {code: code};
        })
    }]
}

export class CHMSClusteringMap extends React.Component {

    render() {
        return (
            <div>
                <CHMSHeatMap uid={'clustering'} apiAddress={null}
                             initConfig={CHMSClusteringMapConfig} {...this.props}
                             isPureConfig/>

            </div>
        );
    }

}

const CHMSSentimentAnalysisMapConfig = {

};

export class CHMSSentimentAnalysisMap extends React.Component {

    render() {
        return (
            <div>
                <CHMSHeatMap uid={'sentimentAnalysis'} apiAddress={null}
                             initConfig={CHMSSentimentAnalysisMapConfig} {...this.props}
                             isPureConfig/>

            </div>
        );

    }

}

//TODO All maps are here