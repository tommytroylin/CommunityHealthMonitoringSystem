/**
 * Created by Tommy on 11/24/15.
 */
import React from 'react';
import { Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/rolling-twitter';
import apiAddress from '../utils/api-address';
import _ from 'lodash';

class CHMSRollingTwitter extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchData(apiAddress.rollingTwitter));
    //TODO make it rolling
  }

  componentDidUpdate() {
    (window.$('#rollingTwitter')).marquee({ direction: 'up' })
  }

  render() {
    return (
      <div>
        <Well>
          <div id="rollingTwitter" direction="up">
            {_.map(this.props.data, oneTwitter =>
              <span><b>{oneTwitter}</b><br /></span>
            )}
          </div>
        </Well>
      </div>
    );
  }

}

export default connect((state, props)=> {
  return {
    onState: state.rollingTwitter.onState,
    data: state.rollingTwitter.data
  }
})(CHMSRollingTwitter);