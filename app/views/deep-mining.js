import React from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import {CHMSClusteringMap} from '../components/heat-maps';
import {CHMSNutrientBarChart} from '../components/charts';
import { CHMSComponentReloadButton} from '../components/reuseable/loading-and-error';

export default class CHMSDeepMiningView extends React.Component {

    render() {
        return (
            <div>

                <Row>
                    <Col xs={12} sm={6}>
                        <h3>3-Cluster</h3>
                        <Well><CHMSClusteringMap/></Well>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Obesity</h3>
                        <Well>
                            <CHMSComponentReloadButton />
                            <img src={require('../static/obesity_by_county.png')} alt=""
                                 className="img-responsive"/></Well>
                    </Col>

                </Row>
                <Row>
                    <Col xs={12}>
                        <Well>
                            <CHMSNutrientBarChart />
                        </Well>
                    </Col>

                </Row>
            </div>
        );
    }

}

