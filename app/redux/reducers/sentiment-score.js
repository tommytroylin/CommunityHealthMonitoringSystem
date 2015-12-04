import * as actionTypes from '../actions/sentiment-score';
import Immutable from 'immutable';


const onState = {
    fetching: 'FETCHING',
    error: 'ERROR',
    drawn: 'DRAWN'
};

const initialState = {
    score: 100,
    onState:onState.fetching
};


export default function sentimentScoreReducer(state = initialState, action) {
    let immutableState = Immutable.fromJS(state);
    switch (action.type) {
        case actionTypes.FETCH_DATA_REQUEST:
            return immutableState.setIn(['onState'], onState.fetching).toJS();
        case actionTypes.FETCH_DATA_SUCCESS:
            return immutableState.setIn(['onState'], onState.drawn).setIn(['score'], action.score.data).toJS();
        case actionTypes.FETCH_DATA_FAILURE:
            return immutableState.setIn(['onState'], onState.error).toJS();
        default:
            return state;
    }
}