// Highmap React wrapper

/**
 * Created by Tommy on 11/25/15.
 */

import React from 'react';
import ReactHighmap from 'react-highcharts/bundle/highmaps';
import * as actions from '../redux/actions/heat-map';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';

let config = {
    chart: {
        spacingBottom: 20
    },
    title: {
        text: 'Europe time zones'
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        map: {
            allAreas: false,
            joinBy: ['iso-a2', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                style: {
                    fontWeight: 'bold'
                }
            },
            mapData: Highcharts.maps['custom/europe'],
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}: <b>{series.name}</b>'
            }

        }
    },

    series: [{
        name: 'UTC',
        data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
            return {code: code};
        })
    }, {
        name: 'UTC + 1',
        data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
            return {code: code};
        })
    }]
};

class CHMSHeatMapLoading extends React.Component {
    render() {
        return <h1>Loading</h1>
    }
}

class CHMSHeatMapError extends React.Component {
    render() {
        return (
            <div>
                Error
            </div>
        )
    }
}

class CHMSHeatMapReload extends React.Component {
    render() {
        return (
            <div>
                <Button bsSize="large" bsStyle="warning" onClick={this.props.handleClick}>Reload HeatMap</Button>
            </div>
        );
    }
}
CHMSHeatMapReload.propTypes = {
    handleClick: React.PropTypes.func.isRequired
};


class CHMSHeatMap extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const { dispatch, onState, config } = this.props;
        return (
            <div>
                <CHMSHeatMapReload handleClick={() => dispatch(actions.requireMapData('1'))}/>
                { onState === 'FETCHING' ? <CHMSHeatMapLoading/> : null }
                { onState === 'ERROR' ? <CHMSHeatMapError /> : null }
                { onState === 'DRAWN' ? <ReactHighmap config={config}/> : null }
            </div>
        );
    }

}



function select(state) {
    return {
        onState: state.onState,
        config: state.config
    };
}


export default connect(select)(CHMSHeatMap);