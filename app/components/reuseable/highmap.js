// Highmap React wrapper

/**
 * Created by Tommy on 11/25/15.
 */

import React from 'react';
import ReactHighmap from 'react-highcharts/dist/highmaps';
import * as actions from '../../redux/actions/heat-map';
import { connect } from 'react-redux';
import {
  CHMSComponentError,
  CHMSComponentLoading,
  CHMSComponentReloadButton
} from './loading-and-error';

class CHMSHeatMap extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.initializeConfig(this.props.uid, this.props.initConfig));
    if (this.props.apiAddress !== null) {
      this.props.dispatch(actions.fetchMapData(this.props.uid, this.props.apiAddress));
    }
  }

  render() {
    return (
      <div>
        <CHMSComponentReloadButton name={this.props.name}
                                   handleClick={()=> this.props.apiAddress!==null?this.props.dispatch(actions.fetchMapData(this.props.uid,this.props.apiAddress)):null} />
        {this.props.onState === 'FETCHING' ? <CHMSComponentLoading name={this.props.name} /> : null}
        {this.props.onState === 'ERROR' ? <CHMSComponentError name={this.props.name} /> : null}
        {this.props.onState === 'DRAWN' ? <ReactHighmap config={this.props.config} /> : null}
      </div>
    );
  }

}

CHMSHeatMap.propTypes = {
  name: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  initConfig: React.PropTypes.object.isRequired,
  apiAddress: React.PropTypes.string.isRequired,
  onState: React.PropTypes.oneOf(['FETCHING', 'ERROR', 'DRAWN']),
  //config: React.PropTypes.object.isRequired
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