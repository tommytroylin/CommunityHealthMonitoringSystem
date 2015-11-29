// Ranking list React wrapper

/**
 * Created by Tommy on 11/28/15.
 */

import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CHMSComponentError, CHMSComponentLoading, CHMSComponentReloadButton } from'./loading-and-error';
import * as actions from '../../redux/actions/ranking-list';
import _ from 'lodash';

class CHMSRankingListList extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.listData !== nextProps.listData;
    }

    render() {
        const handleStyle = (index) => {
            switch (index) {
                case 0 :
                    return 'danger';
                case 1 :
                    return 'warning';
                case 2 :
                    return 'success';
                default:
                    return 'info';
            }
        };

        return (
            <div>
                <ListGroup>
                    {_.map(this.props.listData, (listLable, index)=>
                        <ListGroupItem key={listLable} bsStyle={handleStyle(index)}>{listLable}</ListGroupItem>
                    )}
                </ListGroup>
            </div>
        );
    }
}

class CHMSRankingList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
            this.props.dispatch(actions.fetchListData(this.props.uid, this.props.apiAddress));

    }


    render() {

        return (
            <div>
                <CHMSComponentReloadButton name={this.props.name}
                                           handleClick={ ()=> this.props.dispatch(actions.fetchListData(this.props.uid,this.props.apiAddress))}/>
                { this.props.onState === 'FETCHING' ? <CHMSComponentLoading name={this.props.name}/> : null }
                { this.props.onState === 'ERROR' ? <CHMSComponentError name={this.props.name}/> : null }
                { this.props.onState === 'DRAWN' ? <CHMSRankingListList listData={this.props.listData}/> : null }
            </div>
        );
    }

}


CHMSRankingList.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    apiAddress: React.PropTypes.string.isRequired,
    onState: React.PropTypes.oneOf(['FETCHING', 'ERROR', 'DRAWN']).isRequired,
    //listData: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};


export default connect((state, props)=> {
    if (state.rankingList.rankingLists[props.uid] === undefined) {
        state.rankingList.rankingLists[props.uid] = {}
    }
    return {
        onState: state.rankingList.rankingLists[props.uid].onState,
        listData: state.rankingList.rankingLists[props.uid].listData
    }
})(CHMSRankingList);