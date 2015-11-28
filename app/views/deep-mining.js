import React from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';


export default class CHMSDeepMiningView extends React.Component {

    render() {
        return (
            <div>

                <Row>
                    <Col xs={12} sm={6}>
                        <h3>3-Cluster</h3>
                        <Well></Well>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Obesity</h3>
                        <Well></Well>
                    </Col>
                </Row>
            </div>
        );
    }

}

