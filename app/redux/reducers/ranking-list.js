import * as actionTypes from '../actions/ranking-list';
import Immutable from 'immutable';


const onState = {
    fetching: 'FETCHING',
    error: 'ERROR',
    drawn: 'DRAWN'
};

const initialState = {
    rankingLists: {}
};


export default function rankingListReducer(state = initialState, action) {
    let immutableState = Immutable.fromJS(state);
    switch (action.type) {
        case actionTypes.FETCH_DATA_REQUEST:
            return immutableState.setIn(['rankingLists', action.payload.id, 'onState'], onState.fetching).toJS();
        case actionTypes.FETCH_DATA_SUCCESS:
            return immutableState.setIn(['rankingLists', action.payload.id, 'onState'], onState.drawn).setIn(['rankingLists', action.payload.id, 'listData'], action.payload.listData.data).toJS();
        case actionTypes.FETCH_DATA_FAILURE:
            return immutableState.setIn(['rankingLists', action.payload.id, 'onState'], onState.error).toJS();
        default:
            return state;
    }
}