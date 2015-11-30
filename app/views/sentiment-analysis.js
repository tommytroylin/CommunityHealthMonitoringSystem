import React from 'react';
import {Row, Col, Well} from 'react-bootstrap';
import {CHMSSentimentAnalysisMap} from '../components/heat-maps';
import CHMSSentimentScore from '../components/sentiment-score';

export default class CHMSSentimentAnalysisView extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <Well><CHMSSentimentAnalysisMap/></Well>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12}>
                        <Well><CHMSSentimentScore /></Well>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs={12}>
                        <Well></Well>
                    </Col>
                </Row>
            </div>
        );
    }

}

