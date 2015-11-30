import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';


export default class CHMSIndexShow extends React.Component {

    componentDidMount() {
        (window.$('#indexKnobInject')).knob({angleOffset: -110, angleArc: 220, fgColor: "#66CC66", height: 135});
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={8} md={8} lg={7} lgPush={1}>
                        <h2 className="">Community Health Monitoring System</h2>
                        <p className="lead">A system which crawls numerous health-relating tweets in order to
                            provide users with a variety of health information around them.</p>
                    </Col>
                    <div>
                        <input id="indexKnobInject" type="text" value="75" className="dial" readOnly/>
                    </div>
                </Row>
                <hr />
                <Row>
                    <Col xs={4} md={3} lg={2} lgPush={1}>
                        Test2
                    </Col>
                    <Col xs={8} md={8} lg={7}>
                        <h2 className="">Community Health Monitoring System</h2>
                        <p className="lead">A system which crawls numerous health-relating tweets in order to
                            provide users with a variety of health information around them.</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={8} md={8} lg={7} lgPush={1}>
                        <h2 className="">Community Health Monitoring System</h2>
                        <p className="lead">A system which crawls numerous health-relating tweets in order to
                            provide users with a variety of health information around them.</p>
                    </Col>
                    <Col xs={4} md={3} lg={2}>

                    </Col>
                </Row>
            </Grid>

        );
    }

}

