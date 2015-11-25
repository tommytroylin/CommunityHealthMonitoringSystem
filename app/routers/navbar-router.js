import React from 'react';

import {Route,Router,IndexRoute} from 'react-router';
import CHMSViewContainer from '../components/view'
import CHMSHeatMapView from '../views/heat-maps';
import CHMSCommentView from '../views/comment';
import CHMSRankingListView from '../views/ranking-list';
import CHMSDeepMiningView from '../views/deep-mining';

export default (
    <Router>
        <Route path="/" component={CHMSViewContainer}>
            <IndexRoute component={CHMSHeatMapView}/>
            <Route path="heatMap" component={CHMSHeatMapView}/>
            <Route path="rankingList" component={CHMSRankingListView}/>
            <Route path="deepMining" component={CHMSDeepMiningView}/>
            <Route path="comments" component={CHMSCommentView}/>
        </Route>
    </Router>
);
