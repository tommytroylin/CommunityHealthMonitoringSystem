/**
 * Created by Tommy on 11/24/15.
 */
import React from 'react';
import StateSelect from '../components/subcomponents/state-select';
import SportSelect from '../components/subcomponents/sport-select';
import { CHMSFoodRankList,CHMSSportRankList } from '../components/ranking-lists';
import { CHMSFoodWebChart,CHMSSportBarChart, CHMSStateExerciseChart,CHMSSportExerciseChart } from '../components/charts';
import { Grid, Row, Col, Well } from 'react-bootstrap';

export default class CHMSRangkingListView extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={6}>
                        <h3>Ranking List - Food</h3>
                        <Well><CHMSFoodRankList /></Well>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Ranking List - Sport</h3>
                        <Well><CHMSSportRankList /></Well>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <h3>About food</h3>
                        <Well><CHMSFoodWebChart /></Well>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>About sport</h3>
                        <Well><CHMSSportBarChart /></Well>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Well><CHMSStateExerciseChart /></Well>
                    </Col>
                    <Col xs={12}>
                        <Well><CHMSSportExerciseChart /></Well>
                    </Col>
                </Row>
            </div>
        );
    }

}

