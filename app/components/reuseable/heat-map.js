// Highmap React wrapper

/**
 * Created by Tommy on 11/25/15.
 */

import React from 'react';
import ReactHighmap from 'react-highcharts/bundle/highmaps';
import * as actions from '../../redux/actions/heat-map';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class CHMSHeatMapLoading extends React.Component {
    //TODO Style
    render() {
        return <p>Loading</p>
    }
}

class CHMSHeatMapError extends React.Component {
    //TODO Style
    render() {
        return (
            <p>Error</p>
        )
    }
}

class CHMSHeatMapReload extends React.Component {
    //TODO Style
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
        this.props.dispatch(actions.initializeConfig(this.props.uid, this.props.initConfig));
        this.props.dispatch(actions.fetchMapData(this.props.uid, this.props.apiAddress));
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
    dispatch: React.PropTypes.func.isRequired,
    initConfig: React.PropTypes.object.isRequired,
    apiAddress: React.PropTypes.string.isRequired,
    onState: React.PropTypes.oneOf(['FETCHING', 'ERROR', 'DRAWN']),
    config: React.PropTypes.object.isRequired
};


export default connect((state, props)=> {
    if (state.heatMap.heatMaps[props.uid] === undefined) {
        state.heatMap.heatMaps[props.uid] = {}
    }
    return {
        onState: state.heatMap.heatMaps[props.uid].onState,
        config: state.heatMap.heatMaps[props.uid].config
    }
})(CHMSHeatMap);