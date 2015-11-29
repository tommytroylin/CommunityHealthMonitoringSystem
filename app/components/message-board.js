/**
 * Created by Tommy on 11/30/15.
 */
import React from 'react';
import {Panel} from 'react-bootstrap';
import Immutable from 'immutable';
export default class CHMSMessageBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: Immutable.List([
                {username:"Shiyue XU",content:"Test1"},
                {username:"Shiyue XU",content:"Test2"},
                {username:"Shiyue XU",content:"Test3"}
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
        return (
            <div>
                {messages.reverse().map(message=>
                    <Panel header={<h3>{message.username}</h3>} bsStyle="success" key={message.username+message.content}>
                        <p>{message.content}</p>
                    </Panel>
                )}
            </div>
        );
    }

}

