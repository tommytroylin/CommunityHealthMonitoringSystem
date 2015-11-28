import React from 'react';
import { Grid, Row, Col, Panel, Button, Input} from 'react-bootstrap';
import * as apiAddress from '../utils/api-address'

export default class CHMSContactUsView extends React.Component {

    render() {
        const pannelHeader = <h3>Contact Form</h3>;
        const pannelFooter = (<div>

        </div>);
        return (
            <div>

                <Row>
                    <Col xs={12} md={10} mdPush={1} lg={8} lgPush={2}>
                        <Panel header={pannelHeader}>
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
                    <hr />

                </Row>
            </div>
        );
    }

}

