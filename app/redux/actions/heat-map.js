// Actions for component heat-map
import fetch from 'isomorphic-fetch';
import * as fetchUtil from '../../utils/fetch-util';

export const INITIALIZING = 'INITIALIZING';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export function initializeConfig(id,initConfig) {
    return {
        type: INITIALIZING,
        payload: {
            text: 'Initializing',
            id,
            initConfig
        }
    }
}

export function requireMapData(id) {
    return {
        type: FETCH_DATA_REQUEST,
        payload: {
            text: 'Loading',
            id
        }
    };
}
export function fetchDataFailed(id,errorMsg) {
    return {
        type: FETCH_DATA_FAILURE,
        payload: {
            text: 'Data fetching failed',
            id,
            errorMsg
        },
        error: true
    };
}

export function fetchDataSucceed(id,mapData) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {
            text: 'Map Drawn with new map config',
            id,
            mapData
        }
    };
}

//Async Action for fetching map data and redraw the map
export function fetchMapData(id,address) {
    return function (dispatch) {
        //dispatch requireMapData action to set the map in loading state
        dispatch(requireMapData(id));
        return fetch(address)
            .then(fetchUtil.checkHttpStatus) //check if 404
            .then(fetchUtil.parseJSON)
            .then(mapData => dispatch(fetchDataSucceed(id,mapData)))
            .catch(error => dispatch(fetchDataFailed(id,error)));
    }
}