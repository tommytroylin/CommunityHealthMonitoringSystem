import React from 'react';
import {Button,ButtonGroup} from 'react-bootstrap';
import CHMSSelect from '../reuseable/select';

//TODO Change the options here
const settings = {
    options: [
        {value: 'us-AL', label: 'Alabama'},
        {value: 'us-AK', label: 'Alaska'},
        {value: 'us-AZ', label: 'Arizona'},
        {value: 'us-AR', label: 'Arkansas'},
        {value: 'us-CA', label: 'California'},
        {value: 'us-CO', label: 'Colorado'},
        {value: 'us-FL', label: 'Florida'},
        {value: 'us-GA', label: 'Georgia'},
        {value: 'us-IL', label: 'Illinois'},
        {value: 'us-IN', label: 'Indiana'},
        {value: 'us-IA', label: 'Iowa'},
        {value: 'us-KS', label: 'Kansas'},
        {value: 'us-KY', label: 'Kentucky'},
        {value: 'us-LA', label: 'Louisiana'},
        {value: 'us-ME', label: 'Maine'},
        {value: 'us-MD', label: 'Maryland'},
        {value: 'us-MA', label: 'Massachusetts'},
        {value: 'us-MI', label: 'Michigan'},
        {value: 'us-MN', label: 'Minnesota'},
        {value: 'us-MS', label: 'Mississippi'},
        {value: 'us-MO', label: 'Missouri'},
        {value: 'us-MT', label: 'Montana'},
        {value: 'us-NE', label: 'Nebraska'},
        {value: 'us-NV', label: 'Nevada'},
        {value: 'us-NM', label: 'New Mexico'},
        {value: 'us-NY', label: 'New York'},
        {value: 'us-NC', label: 'North Carolina'},
        {value: 'us-OH', label: 'Ohio'},
        {value: 'us-OK', label: 'Oklahoma'},
        {value: 'us-OR', label: 'Oregon'},
        {value: 'us-PA', label: 'Pennsylvania'},
        {value: 'us-SC', label: 'South Carolina'},
        {value: 'us-TN', label: 'Tennessee'},
        {value: 'us-TX', label: 'Texas'},
        {value: 'us-UT', label: 'Utah'},
        {value: 'us-VA', label: 'Virginia'},
        {value: 'us-WA', label: 'Washington'},
        {value: 'us-WI', label: 'Wisconsin'}
    ],
    defaultValue: 'us-AL'
};

export default class CHMSStateSelect extends React.Component {

    constructor(props) {
        super(props);
        this.getSelectValue = this.getSelectValue.bind(this);
    }

    getSelectValue() {
        return this.refs.select.getSelectValue()
    }

    render() {
        return (
            <CHMSSelect ref="select" {...this.props} {...settings}/>
        );
    }

};

CHMSStateSelect.propTypes = {
    label: React.PropTypes.string.isRequired,
    updateOnClick: React.PropTypes.func.isRequired
};