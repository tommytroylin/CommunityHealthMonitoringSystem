import React from 'react';
import CHMSLogo from '../components/logo'
import CHMSRollingTwitter from '../components/rolling-twitter'
import CHMSHeatMap1 from '../components/heat-map1'
import { connect } from 'react-redux';
import ApiAddresses from '../utils/api-address'


export default class CHMSHeatMapView extends React.Component {

    render() {
        return (
            <div className="container-fluid">

                <CHMSLogo/>
                <hr/>
                <CHMSRollingTwitter/>
                <hr/>
                <CHMSHeatMap1/>
            </div>

        );
    }

}

