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

export class CHMSProfileSportList extends React.Component {

    render() {
        return (
            <div>
                <CHMSRankingList uid={'profileSport'} apiAddress={null} {...this.props}/>
            </div>
        );

    }

}

//TODO All ranking lists are here

//To create a new dynamic list, assign property apiAddress
// like this <CHMSRankingList uid={'profileSport'} apiAddress={ApiAddresses.sportRankList} {...this.props}/>

//To create a static list, assign property apiAddress to null and listData to the static list data
// like this <CHMSRankingList uid={'staticProfileSport'} apiAddress={null} listData={listConfig} {...this.props}/>