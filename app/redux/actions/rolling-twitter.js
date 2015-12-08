import fetch from 'isomorphic-fetch';
import * as fetchUtil from '../../utils/fetch-util';

export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE_ROLLING_TWITTER';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS_ROLLING_TWITTER';

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

export function fetchDataSucceed(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      text: 'Map Drawn with new map config',
      data
    }
  };
}

//Async Action for fetching data
export function fetchData(address) {
  return function (dispatch) {
    //dispatch requireMapData action to set the map in loading state
    return fetch(address)
      .then(fetchUtil.checkHttpStatus) //check if 404
      .then(fetchUtil.parseJSON)
      .then(data => dispatch(fetchDataSucceed(data)))
      .catch(error => dispatch(fetchDataFailed(error)));
  }
}
