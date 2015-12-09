/**
 * Created by Tommy on 11/24/15.
 */
import React from 'react';
import { CHMSSportRankList } from '../components/ranking-lists';
import {
  CHMSSportBarChart,
  CHMSStateExerciseChart,
  CHMSSportExerciseChart
} from '../components/charts';
import { Row, Col, Well } from 'react-bootstrap';
import { CHMSHeatMap1 } from '../components/heat-maps';

export default class CHMSRangkingListView extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <h3>Heat Map</h3>
            <Well><CHMSHeatMap1 /></Well>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <h3>Ranking List - Sport</h3>
            <Well><CHMSSportRankList /></Well>
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

