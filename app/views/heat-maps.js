import React from 'react';
import CHMSLogo from '../components/logo';
import CHMSRollingTwitter from '../components/rolling-twitter';
import CHMSIndexShow from '../components/indexShow';
import { Grid, Well } from 'react-bootstrap';
import { CHMSHeatMap1 } from '../components/heat-maps';
import { connect } from 'react-redux';
import ApiAddresses from '../utils/api-address';

export default class CHMSHeatMapView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState({isActive: id});
    }

    render() {
        return (
            <Grid fluid>
                <CHMSRollingTwitter/>
                <hr/>
                <CHMSIndexShow/>
            </Grid>
        );
    }

}

