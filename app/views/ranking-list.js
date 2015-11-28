/**
 * Created by Tommy on 11/24/15.
 */
import React from 'react';

import StateSelect from '../components/subcomponents/state-select';
import RankingList from '../components/reuseable/ranking-list';
import { CHMSFoodRankList,CHMSSportRankList } from '../components/ranking-lists';
import { Grid, Row, Col, Well } from 'react-bootstrap';
export default class CHMSRangkingListView extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={6}>
                        <h3>Ranking List - Food</h3>
                        <Well><CHMSFoodRankList /></Well>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Ranking List - Sport</h3>
                        <Well><CHMSSportRankList /></Well>
                    </Col>
                </Row>
                <Row>

                </Row>
            </div>
        );
    }

}

