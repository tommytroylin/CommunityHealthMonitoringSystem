import React from 'react';
import {Button,ButtonGroup} from 'react-bootstrap';
import _ from 'lodash';

export default class CHMSSelectAndUpdate extends React.Component {
    render() {

        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <select defaultValue={this.props.defaultValue}>
                    {_.map(this.props.options, option =>
                        <option value={option.value} key={option.value+'.'+option.label}>{option.label}</option>
                    )}
                </select>
                <Button onClick={this.props.updateOnClick}>Update</Button>
            </div>

        );
    }
};

CHMSSelectAndUpdate.propTypes = {
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.object),
    updateOnClick: React.PropTypes.func.isRequired
};