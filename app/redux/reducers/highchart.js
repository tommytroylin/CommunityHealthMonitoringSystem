import * as actionTypes from '../actions/highchart';
import Immutable from 'immutable';


const onState = {
    fetching: 'FETCHING',
    error: 'ERROR',
    drawn: 'DRAWN'
};

const initialState = {
    highcharts: {}
};


export default function highchartReducer(state = initialState, action) {
    let immutableState = Immutable.fromJS(state);
    switch (action.type) {
        case actionTypes.INITIALIZING:
            return immutableState.setIn(['highcharts', action.payload.id], {
                onState: onState.drawn,
                config: action.payload.initConfig
            }).toJS();
        case actionTypes.FETCH_DATA_REQUEST:
            return immutableState.setIn(['highcharts', action.payload.id, 'onState'], onState.fetching).toJS();
        case actionTypes.FETCH_DATA_SUCCESS:
        {
            //TODO apply data
            let result = immutableState.setIn(['highcharts', action.payload.id, 'onState'], onState.drawn).setIn(['highcharts', action.payload.id, 'config', 'series'], action.payload.chartConfig.data)
            if (action.payload.chartConfig.hasOwnProperty("xAxis")) {
                return result.setIn(['highcharts', action.payload.id, 'config', 'xAxis', 'categories'], action.payload.chartConfig.xAxis).toJS();
            } else {
                return result.toJS();
            }
        }
        case actionTypes.FETCH_DATA_FAILURE:
            return immutableState.setIn(['highcharts', action.payload.id, 'onState'], onState.error).toJS();
        default:
            return state;
    }
}