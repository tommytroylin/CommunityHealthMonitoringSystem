import heatMap from './heat-map'
import rankingList from './ranking-list'
import highchart from './highchart'

import {combineReducers} from 'redux';

export let reducers = combineReducers({
    heatMap,
    rankingList,
    highchart
});