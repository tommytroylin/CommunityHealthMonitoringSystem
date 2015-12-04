import heatMap from './heat-map';
import rankingList from './ranking-list';
import highchart from './highchart';
import rollingTwitter from './rolling-twitter';
import sentimentScore from './sentiment-score';
import {combineReducers} from 'redux';

export let reducers = combineReducers({
    heatMap,
    rankingList,
    highchart,
    rollingTwitter,
    sentimentScore
});