import React from 'react';
import MessageBoard from '../components/message-board';
import {Panel,Grid,Row,Col,Input,Button} from 'react-bootstrap';

export default class CHMSMessageBoardView extends React.Component {

    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
        this.reset = this.reset.bind(this);
    }

    addMessage(username) {
        this.refs.messageBoard.addMessage(username, this.refs.content.getValue())
    }

    reset() {
        this.refs.content.getInputDOMNode().value = "";
    }

    render() {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={10} mdPush={1} lg={8} lgPush={2}>
                            <Panel header={ <h3>Leave a message</h3>}>
                                <Grid fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <Input ref="content" type="textarea" label="Your Message"
                                                   placeholder="..."/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="pull-right">
                                                <Button bsStyle="danger" bsSize="small" onClick={this.reset}>Reset</Button>
                                                <Button bsStyle="success" bsSize="small"
                                                        onClick={()=>this.addMessage("Tommy")}>Post</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Panel>
                        </Col>
                    </Row>
                    <hr />
                    <MessageBoard ref="messageBoard"/>
                </Grid>
            </div>

        );
    }

}

