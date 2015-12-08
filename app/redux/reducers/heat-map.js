import * as actionTypes from '../actions/heat-map';
import Immutable from 'immutable';

const onState = {
  fetching: 'FETCHING',
  error: 'ERROR',
  drawn: 'DRAWN'
};

const initialState = {
  heatMaps: {}
};

export default function heatMapReducer(state = initialState, action) {
  let immutableState = Immutable.fromJS(state);
  switch (action.type) {
    case actionTypes.INITIALIZING:
      return immutableState.setIn(['heatMaps', action.payload.id], {
        onState: onState.drawn,
        config: action.payload.initConfig
      }).toJS();
    case actionTypes.FETCH_DATA_REQUEST:
      return immutableState.setIn(['heatMaps', action.payload.id, 'onState'], onState.fetching)
        .toJS();
    case actionTypes.FETCH_DATA_SUCCESS:
      return immutableState.setIn(['heatMaps', action.payload.id, 'onState'], onState.drawn)
        .setIn(['heatMaps', action.payload.id, 'config', 'series', 0,
                'data'], action.payload.mapData.data)
        .toJS();
    case actionTypes.FETCH_DATA_FAILURE:
      return immutableState.setIn(['heatMaps', action.payload.id, 'onState'], onState.error).toJS();
    default:
      return state;
  }
}