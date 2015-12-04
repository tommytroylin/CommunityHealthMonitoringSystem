import fetch from 'isomorphic-fetch';
import * as fetchUtil from '../../utils/fetch-util';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST_SENTIMENT_SCORE';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE_SENTIMENT_SCORE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS_SENTIMENT_SCORE';


export function requireScoreData() {
    return {
        type: FETCH_DATA_REQUEST,
        payload: {
            text: 'Loading'
        }
    };
}
export function fetchDataFailed(errorMsg) {
    return {
        type: FETCH_DATA_FAILURE,
        payload: {
            text: 'Data fetching failed',
            errorMsg
        },
        error: true
    };
}

export function fetchDataSucceed(score) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {
            text: 'Map Drawn with new map chartConfig',
            score
        }
    };
}
export function fetchScoreData(address, withData) {

    return function (dispatch) {
        let options = {};
        if (withData !== undefined) {
            options = {
                method: 'post', //post
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `data=${withData}`
            };
        }
        console.log(options);
        return fetch(address, options)
            .then(fetchUtil.checkHttpStatus)
            .then(fetchUtil.parseJSON)
            .then(score => dispatch(fetchDataSucceed(score)))
            .catch(error => dispatch(fetchDataFailed(error)));
    }
}

