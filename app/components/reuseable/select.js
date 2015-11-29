import React from 'react';
import {Button,ButtonGroup} from 'react-bootstrap';
import _ from 'lodash';

export default class CHMSSelect extends React.Component {
    constructor(props) {
        super(props);
        this.getSelectValue = this.getSelectValue.bind(this);
    }
    getSelectValue(){
         return this.refs.select.value;
    }
    render() {

        return (
            <span>
                <label>{this.props.label}</label>
                <select defaultValue={this.props.defaultValue} ref="select">
                    {_.map(this.props.options, option =>
                        <option value={option.value} key={option.value+'.'+option.label}>{option.label}</option>
                    )}
                </select>
            </span>

        );
    }
};

CHMSSelect.propTypes = {
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.object)
};