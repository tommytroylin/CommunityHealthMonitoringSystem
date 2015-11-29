import * as actionTypes from '../actions/rolling-twitter';
import Immutable from 'immutable';


const onState = {
    fetching: 'FETCHING',
    error: 'ERROR',
    drawn: 'DRAWN'
};

const initialState = {
    onState: onState.fetching,
    data: []
};


export default function rollingTwitterReducer(state = initialState, action) {
    let immutableState = Immutable.fromJS(state);
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return immutableState.setIn(['onState'], onState.drawn).setIn(['data'], action.payload.data).toJS();
        case actionTypes.FETCH_DATA_FAILURE:
            return immutableState.setIn(['onState'], onState.error).toJS();
        default:
            return state;
    }
}