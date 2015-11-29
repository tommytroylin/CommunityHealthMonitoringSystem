/**
 * Created by Tommy on 11/30/15.
 */
import React from 'react';
import {Panel,Col,Row} from 'react-bootstrap';
import Immutable from 'immutable';
export default class CHMSMessageBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: Immutable.List([
                {username: "Chengguang Xu", content: "Hello everyone!"},
                {username: "Ziye Sang", content: "Good to see you:)"},
                {username: "Mengzhu Li", content: "Now you find this."},
                {username: "Xuan Yu", content: "This is our message board."},
                {username: "Yanyi Zhang", content: "You can communicate with each other via this."},
                {username: "Shiyue Xu", content: "Hope you like our system."}
            ])
        };

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(username, content) {
        this.setState(({messages}) => ({
            messages: messages.push({username, content})
        }));
    }


    render() {
        const messages = this.state.messages;
        const styles = ["success","warning","danger","info","default","primary"];
        return (
            <Row>
                <Col xs={12} md={10} mdPush={1} lg={8} lgPush={2}>
                    {messages.reverse().map((message,index)=>
                        <Panel header={<h3>{message.username}</h3>} bsStyle={styles[index%6]}
                               key={message.username+message.content}>
                            <p>{message.content}</p>
                        </Panel>
                    )}
                </Col>
            </Row>
        );
    }

}

