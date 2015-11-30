import React from 'react';
import { Grid, Row, Col, Panel, Button, Input, ListGroup, ListGroupItem } from 'react-bootstrap';
import * as apiAddress from '../utils/api-address'

export default class CHMSContactUsView extends React.Component {

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
                                            <ListGroupItem header="Where Are We" bsStyle="info"/>
                                            <ListGroupItem>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97009.53151095942!2d-74.53413255468554!3d40.55157730273884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b883547b41d5%3A0xb69acf5061471d78!2sPiscataway+Township%2C+NJ!5e0!3m2!1sen!2sus!4v1448838523245" width="100%" height="352" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
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
