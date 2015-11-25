/**
 * Created by Tommy on 11/24/15.
 */
import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
const logoImg = require('../static/logo.png');


export default class CHMSLogo extends React.Component {

    render() {
        return (
                <Grid fluid>
                    <Row>
                        <Col xs={4} md={3} lg={2}>
                            <img className="img-responsive pull-left" src={logoImg} alt="Logo"/>
                        </Col>
                        <Col xs={8} md={8} lg={7} lgPush={1}>
                            <h2 className="">Community Health Monitoring System</h2>
                            <p className="lead">A system which crawls numerous health-relating tweets in order to
                                provide users with a variety of health information around them.</p>
                        </Col>
                    </Row>
                </Grid>

        );
    }

}

