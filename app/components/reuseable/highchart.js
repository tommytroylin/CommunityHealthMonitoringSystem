// Highchars React wrapper

/**
 * Created by Tommy on 11/25/15.
 */

import React from 'react';
import ReactHighcharts from 'react-highcharts';
import * as actions from '../../redux/actions/highchart';
import { connect } from 'react-redux';
import {
  CHMSComponentError,
  CHMSComponentLoading,
  CHMSComponentReloadButton
} from './loading-and-error';

class Highchart extends React.Component {

  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.onState !== nextProps.onState || this.props.config !== nextProps.config;
  }

  componentDidMount() {
    this.props.dispatch(actions.initializeConfig(this.props.uid, this.props.initConfig));
    this.updateChart(this.props.initOptionData);

  }

  updateChart(data) {
    this.currentOptionData = data;
    if (this.props.apiAddress !== null) {
      this.props.dispatch(actions.fetchChartData(this.props.uid, this.props.apiAddress, data));
    }
  }

  render() {
    return (
      <div>
        <CHMSComponentReloadButton name={this.props.name}
                                   handleClick={() => this.updateChart(this.currentOptionData)} />
        {this.props.onState === 'FETCHING' ? <CHMSComponentLoading name={this.props.name} /> : null}
        {this.props.onState === 'ERROR' ? <CHMSComponentError name={this.props.name} /> : null}
        {this.props.onState === 'DRAWN' ? <ReactHighcharts config={this.props.config} /> : null}
      </div>
    );
  }

}

Highchart.propTypes = {
  name: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  initConfig: React.PropTypes.object.isRequired,
  apiAddress: React.PropTypes.string.isRequired,
  onState: React.PropTypes.oneOf(['FETCHING', 'ERROR', 'DRAWN']),
  initOptionData: React.PropTypes.object,
  //config: React.PropTypes.object.isRequired
};

export default connect((state, props)=> {
  if (state.highchart.highcharts[props.uid] === undefined) {
    state.highchart.highcharts[props.uid] = {}
  }
  return {
    onState: state.highchart.highcharts[props.uid].onState,
    config: state.highchart.highcharts[props.uid].config
  }
}, undefined, undefined, { withRef: true })(Highchart);