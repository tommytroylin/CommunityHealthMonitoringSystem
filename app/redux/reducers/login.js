import * as actionTypes from '../actions/heat-map';
import Immutable from 'immutable';

const onState = {
    fetching: 'FETCHING',
    error: 'ERROR',
    drawn: 'DRAWN'
};

const initialState = {
    onState: onState.fetching,
    config: {}
};


export default function heatMapReducer(state = initialState, action) {
    let immutableState = Immutable.fromJS(state);
    switch (action.type) {
        case actionTypes.FETCH_DATA_REQUEST:
            return immutableState.set('onState', onState.fetching).toObject();
        case actionTypes.FETCH_DATA_SUCCESS:
            return immutableState.set('onState', onState.drawn).set('config', action.payload.data).toObject();
        case actionTypes.FETCH_DATA_FAILURE:
            return immutableState.set('onState', onState.error).set('config', action.payload.data).toObject();
        default:
            return state;
    }
}