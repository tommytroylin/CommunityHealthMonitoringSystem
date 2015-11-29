// Actions for component highchart
import fetch from 'isomorphic-fetch';
import * as fetchUtil from '../../utils/fetch-util';

export const INITIALIZING = 'INITIALIZING_HIGHCHARTS';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST_HIGHCHARTS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE_HIGHCHARTS';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS_HIGHCHARTS';

export function initializeConfig(id, initConfig) {
    return {
        type: INITIALIZING,
        payload: {
            text: 'Initializing',
            id,
            initConfig
        }
    }
}

export function requireChartData(id) {
    return {
        type: FETCH_DATA_REQUEST,
        payload: {
            text: 'Loading',
            id
        }
    };
}
export function fetchDataFailed(id, errorMsg) {
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

export function fetchDataSucceed(id, chartConfig) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {
            text: 'Map Drawn with new map chartConfig',
            id,
            chartConfig
        }
    };
}

//Async Action for fetching list data
export function fetchChartData(id, address, withData) {
    return function (dispatch) {
        let options = {};
        if (withData !== undefined) {
            options = {
                method: 'post', //post
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(withData)
            }
        }
        return fetch(address,options)
            .then(fetchUtil.checkHttpStatus) //check if 404
            .then(fetchUtil.parseJSON)
            .then(chartConfig => dispatch(fetchDataSucceed(id, chartConfig)))
            .catch(error => dispatch(fetchDataFailed(id, error)));
    }
}