import React from 'react';
import CHMSLogo from '../components/logo'
import CHMSRollingTwitter from '../components/rolling-twitter'
import CHMSHeatMap from '../components/heat-map'

export default class CHMSHeatMapView extends React.Component {

    render() {
        return (
                <div className="container-fluid">

                    <CHMSLogo/>
                    <hr/>
                    <CHMSRollingTwitter/>
                    <hr/>
                    <CHMSHeatMap/>
                </div>

        );
    }

}

