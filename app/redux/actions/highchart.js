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
            console.log('Data posted!');
            console.log(withData);
            console.log("to");
            options = {
                method: 'post', //post
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: function () {
                    let result = '';
                    for (let i of Object.keys(withData.data)) {
                        result += `${i}=${withData.data[i]}&`
                    }
                    return result;
                }()
            };
            console.log(options);
        }
        return fetch(address,options)
            .then(fetchUtil.checkHttpStatus) //check if 404
            .then(fetchUtil.parseJSON)
            .then(chartConfig => dispatch(fetchDataSucceed(id, chartConfig)))
            .catch(error => dispatch(fetchDataFailed(id, error)));
    }
}


