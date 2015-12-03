import React from 'react';
import {Button,ButtonGroup} from 'react-bootstrap';
import CHMSSelect from '../reuseable/select';

//TODO Change the options here
const settings = {
    options: [
        {value: 'Basketball',label:'Basketball'},
        {value: 'Football',label:'Football'},
        {value: 'Soccer',label:'Soccer'},
        {value: 'Run',label:'Run'},
        {value: 'BaseBall',label:'BaseBall'},
        {value: 'Hockey',label:'Hockey'},
        {value: 'Walking',label:'Walking'},
        {value: 'Golf',label:'Golf'},
        {value: 'Hunting',label:'Hunting'}
    ],
    defaultValue:'Basketball'
};

export default class CHMSSportSelect extends React.Component {

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

CHMSSportSelect.propTypes = {
    label: React.PropTypes.string.isRequired
};

