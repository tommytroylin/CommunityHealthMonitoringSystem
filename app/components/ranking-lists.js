import React from 'react';
import CHMSRankingList from './reuseable/ranking-list';
import ApiAddresses from '../utils/api-address';


export class CHMSFoodRankList extends React.Component {

    render() {
        return (
            <div>
                <CHMSRankingList uid={'Food'} apiAddress={ApiAddresses.foodRankList} {...this.props}/>
            </div>
        );

    }

}


export class CHMSSportRankList extends React.Component {

    render() {
        return (
            <div>
                <CHMSRankingList uid={'Sport'} apiAddress={ApiAddresses.sportRankList} {...this.props}/>
            </div>
        );

    }
}


//TODO All ranking lists are here