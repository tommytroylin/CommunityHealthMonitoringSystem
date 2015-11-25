// Actions for component heat-map


export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';


export function requireMapData(data) {
    return {
        type: FETCH_DATA_REQUEST,
        payload: {
            text: 'Redraw the heat map',
            data
        }
    };
}
export function fetchDataFailed(data) {
    return {
        type: FETCH_DATA_FAILURE,
        payload: {
            text: 'Data fetch failed',
            data
        },
        error: true
    };
}

export function fetchDataSucceed(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {
            text: 'drawMap',
            data
        }
    };
}