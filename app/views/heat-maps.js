import React from 'react';
import CHMSRollingTwitter from '../components/rolling-twitter';
import CHMSIndexShow from '../components/indexShow';
import { Grid } from 'react-bootstrap';

export default class CHMSHeatMapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ isActive: id });
  }

  render() {
    return (
      <Grid fluid>
        <CHMSRollingTwitter />
        <hr />
        <CHMSIndexShow />
      </Grid>
    );
  }

}

