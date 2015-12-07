import React from 'react';
import { Button, Alert } from 'react-bootstrap';

export class CHMSComponentLoading extends React.Component {

  render() {
    return (
      <Alert bsStyle="warning">
        <strong>{this.props.name}</strong> is Loading..
      </Alert>
    );
  }

}

export class CHMSComponentError extends React.Component {

  render() {
    return (
      <Alert bsStyle="danger">
        <h4>Oh snap! You got an error!</h4>
        <p> Error Message: {this.props.errorMsg}</p>
        <p>
          Find admin and beg him to fix this!
        </p>
      </Alert>
    );
  }

}

export class CHMSComponentReloadButton extends React.Component {

  render() {
    return (
      <div>
        <Button bsSize="small" bsStyle="warning"
                onClick={this.props.handleClick}>Reload {this.props.name}</Button>
      </div>
    );
  }

}

CHMSComponentLoading.propsTypes = {
  name: React.PropTypes.string.isRequired
};

CHMSComponentError.propsTypes = {
  errorMsg: React.PropTypes.string.isRequired
};

CHMSComponentReloadButton.propTypes = {
  name: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
};