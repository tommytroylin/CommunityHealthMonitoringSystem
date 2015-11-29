import React from 'react';
import { Grid, Row, Col, Panel, Button, Input, ListGroup, ListGroupItem } from 'react-bootstrap';
import * as apiAddress from '../utils/api-address'

export default class CHMSContactUsView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log(this.refs)

    }

    render() {
        return (
            <div>


                <Row>
                    <Col xs={12}>
                        <Panel header={<h3>Contact Information</h3>}>
                            <Grid fluid>
                                <Row>
                                    <Col xs={12} md={6} mdPush={6}>
                                        <ListGroup ref="teamMemberFrame">
                                            <ListGroupItem header="Team Members" bsStyle="info"/>
                                            <ListGroupItem header="Chengguang Xu (Team Leader)">&nbsp;&nbsp;&nbsp;<a
                                                href="mailto:xuxiaolan1991@gmail.com"><span
                                                className="glyphicon glyphicon-envelope"/>
                                                xuxiaolan1991@gmail.com</a></ListGroupItem>
                                            <ListGroupItem header="Ziye Sang">&nbsp;&nbsp;&nbsp;<a
                                                href="mailto:zs164@scarletmail.rutgers.edu"><span
                                                className="glyphicon glyphicon-envelope"/> zs164@scarletmail.rutgers.edu</a></ListGroupItem>
                                            <ListGroupItem header="Mengzhu Li">&nbsp;&nbsp;&nbsp;<a
                                                href="mailto:bambooleemengzhu@hotmail.com"><span
                                                className="glyphicon glyphicon-envelope"/> bambooleemengzhu@hotmail.com</a></ListGroupItem>
                                            <ListGroupItem header="Xuan Yu">&nbsp;&nbsp;&nbsp;<a
                                                href="mailto:xy158@scarletmail.rutgers.edu"><span
                                                className="glyphicon glyphicon-envelope"/> xy158@scarletmail.rutgers.edu</a></ListGroupItem>
                                            <ListGroupItem header="Yanyi Zhang">&nbsp;&nbsp;&nbsp;<a
                                                href="mailto:yz593@scarletmail.rutgers.edu"><span
                                                className="glyphicon glyphicon-envelope"/> yz593@scarletmail.rutgers.edu</a></ListGroupItem>
                                            <ListGroupItem header="Shiyue Xu">&nbsp;&nbsp;&nbsp;<a
                                                href="mailto:xushiyue121@gmail.com"><span
                                                className="glyphicon glyphicon-envelope"/>
                                                xushiyue121@gmail.com</a></ListGroupItem>
                                        </ListGroup>

                                    </Col>
                                    <Col xs={12} md={6} mdPull={6}>
                                        <ListGroup>
                                            <ListGroupItem header="Where are we" bsStyle="info"/>
                                            <ListGroupItem>
                                                <iframe width="100%" height="352"
                                                        src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Brooklyn,+New+York,+NY,+United+States&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=61.282355,146.513672&amp;ie=UTF8&amp;hq=&amp;hnear=Brooklyn,+Kings,+New+York&amp;ll=40.649974,-73.950005&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>

                                            </ListGroupItem>

                                        </ListGroup>


                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                            </Grid>
                        </Panel>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12} md={10} mdPush={1} lg={8} lgPush={2}>

                        <Panel header={ <h3>Contact Form</h3>}>
                            <form action={apiAddress.contactUsForm} method="post">
                                <Grid fluid>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <Input type="text" label="Your Name" placeholder="Enter your name"/>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Input type="email" label="Your Email"
                                                   placeholder="Enter your email address"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Input type="textarea" label="Your Message" placeholder="..."/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="pull-right"><Button bsStyle="danger" bsSize="small"
                                                                                type="reset">Reset</Button> <Button
                                                bsStyle="success" bsSize="small" type="button">Send</Button></div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </form>
                        </Panel>
                    </Col>

                </Row>
            </div>
        );
    }

}

//TODO Change iframe location