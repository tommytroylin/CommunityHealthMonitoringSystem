import React from 'react';
import {Route,Router,IndexRoute} from 'react-router';
import CHMSViewContainer from '../components/view'
import CHMSHeatMapView from '../views/heat-maps';
import CHMSContactUsViews from '../views/contact-us';
import CHMSRankingListView from '../views/ranking-list';
import CHMSDeepMiningView from '../views/deep-mining';
import CHMSMessageBoardView from '../views/message-board';
import CHMSSentimentAnalysisView from '../views/sentiment-analysis';

export default (
    <Router>
        <Route path="/" component={CHMSViewContainer}>
            <IndexRoute component={CHMSHeatMapView}/>
            <Route path="heatMap" component={CHMSHeatMapView}/>
            <Route path="rankingList" component={CHMSRankingListView}/>
            <Route path="deepMining" component={CHMSDeepMiningView}/>
            <Route path="sentimentAnalysis" component={CHMSSentimentAnalysisView}/>
            <Route path="contactUs" component={CHMSContactUsViews}/>
            <Route path="messageBoard" component={CHMSMessageBoardView}/>
        </Route>
    </Router>
);
