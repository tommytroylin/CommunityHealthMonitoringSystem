import React from 'react';
import CHMSLogo from '../components/logo';
import CHMSRollingTwitter from '../components/rolling-twitter';
import CHMSIndexShow from '../components/indexShow';
import { Grid, Well } from 'react-bootstrap';
import { CHMSHeatMap1, CHMSHeatMap2 } from '../components/heat-maps';
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
        const subViews = {1: <CHMSHeatMap1 />, 2: <CHMSHeatMap2 />};
        return (
            <Grid fluid>
                <CHMSIndexShow/>
                <hr />
                <CHMSRollingTwitter/>
                <hr/>
                <ul className="nav nav-tabs">
                    <li role="presentation" className={this.state.isActive === 1?'active':null}
                        onClick={() => this.handleClick(1)}><a>Heat Map 1</a></li>
                    <li role="presentation" className={this.state.isActive === 2?'active':null}
                        onClick={() => this.handleClick(2)}><a>Heat Map 2</a></li>
                </ul>
                <Well>
                    {subViews[this.state.isActive]}
                </Well>
            </Grid>
        );
    }

}

