import React from 'react';
import {Button,ButtonGroup} from 'react-bootstrap';
import CHMSSelectAndUpdate from '../reuseable/select-and-update';

//Change options settings here
//
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
    render() {
        return (
            <CHMSSelectAndUpdate {...this.props} {...settings}/>
        );
    }
};

CHMSSportSelect.propTypes = {
    label: React.PropTypes.string.isRequired,
    updateOnClick: React.PropTypes.func.isRequired
};

