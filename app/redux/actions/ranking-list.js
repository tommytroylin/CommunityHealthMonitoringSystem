// Actions for component ranking-list
import fetch from 'isomorphic-fetch';
import * as fetchUtil from '../../utils/fetch-util';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST_RANKING_LIST';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE_RANKING_LIST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS_RANKING_LIST';

export function requireMapData(id) {
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

export function fetchDataSucceed(id, listData) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      text: 'Map Drawn with new map config',
      id,
      listData
    }
  };
}

//Async Action for fetching list data
export function fetchListData(id, address) {
  return function (dispatch) {
    return fetch(address)
      .then(fetchUtil.checkHttpStatus) //check if 404
      .then(fetchUtil.parseJSON)
      .then(listData => dispatch(fetchDataSucceed(id, listData)))
      .catch(error => dispatch(fetchDataFailed(id, error)));
  }
}