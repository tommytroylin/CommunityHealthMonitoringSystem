// Highmap React wrapper

/**
 * Created by Tommy on 11/25/15.
 */

import React from 'react';
import ReactHighmap from 'react-highcharts/bundle/highmaps';
import * as actions from '../../redux/actions/heat-map';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import IdGenerator from '../../utils/id-generator';


class CHMSHeatMapLoading extends React.Component {
    render() {
        return <p>Loading</p>
    }
}

class CHMSHeatMapError extends React.Component {
    render() {
        return (
            <p>Error</p>
        )
    }
}

class CHMSHeatMapReload extends React.Component {
    render() {
        return (
            <div>
                <Button bsSize="small" bsStyle="warning" onClick={this.props.handleClick}>Reload HeatMap</Button>
            </div>
        );
    }
}

CHMSHeatMapReload.propTypes = {
    handleClick: React.PropTypes.func.isRequired
};


class CHMSHeatMap extends React.Component {

    constructor(props) {
        console.log(props);
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(actions.initializeConfig(this.props.uid, this.props.initConfig))
    }

    render() {
        return (
            <div>
                <CHMSHeatMapReload
                    handleClick={ ()=> this.props.dispatch(actions.fetchMapData(this.props.uid,this.props.apiAddress))}/>
                { this.props.onState === 'FETCHING' ? <CHMSHeatMapLoading/> : null }
                { this.props.onState === 'ERROR' ? <CHMSHeatMapError /> : null }
                { this.props.onState === 'DRAWN' ? <ReactHighmap config={this.props.config}/> : null }
            </div>
        );
    }

}

CHMSHeatMap.propTypes = {
    apiAddress: React.PropTypes.string.isRequired,
    onState: React.PropTypes.oneOf(['FETCHING', 'ERROR', 'DRAWN']),
    config: React.PropTypes.object.isRequired
};


export default connect((state)=> {
    const uid = IdGenerator.get('HeatMap').next();
    if (state.heatMap.heatMaps[uid] === undefined) {
        state.heatMap.heatMaps[uid] = {}
    }
    return {
        onState: state.heatMap.heatMaps[uid].onState,
        config: state.heatMap.heatMaps[uid].config,
        uid
    }
})(CHMSHeatMap);