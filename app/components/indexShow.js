import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import {CHMSIndexFoodChart} from './charts';
import {CHMSIndexBarChart} from './charts';


export default class CHMSIndexShow extends React.Component {

    componentDidMount() {
        (window.$('#indexKnobInject')).knob({angleOffset: -110, angleArc: 220, fgColor: "#66CC66", height: 135});
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={8} md={6} lg={7} lgPush={1}>
                        <h2 className="">Sport Analysis</h2>
                        <p className="lead">This histogram shows the difference about the frequency that several kinds
                            of sports are played in the cities with faster life pace and the cities with slower life
                            pace respectively.</p>
                    </Col>
                    <Col xs={4} md={5} lg={2}>
                        <CHMSIndexBarChart />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={4} md={6} lg={2} lgPush={1}>
                        <CHMSIndexFoodChart />
                    </Col>
                    <Col xs={8} md={6} lg={7}>
                        <h2 className="">Food Analysis</h2>
                        <p className="lead">This is a spider web which shows the average nutrition content of the food
                            in cities with faster life pace and the cities with slower life pace respectively.</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={8} md={8} lg={7} lgPush={1}>
                        <h2 className="">Sentimental Analysis</h2>
                        <p className="lead">This is the knob about sentimental level for two types of cities,
                            the cities with faster life pace and the cities with slower life pace.  </p>
                    </Col>
                    <div>
                        <input id="indexKnobInject" type="text" value="75" className="dial" readOnly/>
                    </div>
                </Row>

            </Grid>

        );
    }

}

