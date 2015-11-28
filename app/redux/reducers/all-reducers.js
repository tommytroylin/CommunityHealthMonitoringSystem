import heatMap from './heat-map'
import rankingList from './ranking-list'

import {combineReducers} from 'redux';

export let reducers = combineReducers({
    heatMap,
    rankingList
});