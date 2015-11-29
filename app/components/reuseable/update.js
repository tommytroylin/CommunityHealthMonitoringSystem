import React from 'react';
import {Button} from 'react-bootstrap';

export default class CHMSUpdateButton extends React.Component {
    render() {

        return (
           <Button onClick={this.props.updateOnClick}>Update</Button>
        );
    }
};

CHMSUpdateButton.propTypes = {

    updateOnClick: React.PropTypes.func.isRequired
};