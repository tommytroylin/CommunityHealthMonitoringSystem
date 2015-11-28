import React from 'react';
import {Button} from 'react-bootstrap';
export class CHMSComponentLoading extends React.Component {
    //TODO Style and name handling
    render() {
        return <p>Loading</p>
    }
}

export class CHMSComponentError extends React.Component {
    //TODO Style name handling
    render() {
        return (
            <p>Error</p>
        )
    }
}

export class CHMSComponentReloadButton extends React.Component {
    //TODO Style name handling
    render() {
        return (
            <div>
                <Button bsSize="small" bsStyle="warning" onClick={this.props.handleClick}>Reload HeatMap</Button>
            </div>
        );
    }
}
CHMSComponentLoading.propsTypes = {
    name: React.PropTypes.string.isRequired
};

CHMSComponentError.propsTypes = {
    name: React.PropTypes.string.isRequired
};
CHMSComponentReloadButton.propTypes = {
    name: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired
};