import React from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import {CHMSClusteringMap} from '../components/heat-maps';
import {CHMSNutrientBarChart} from '../components/charts';
import { CHMSComponentReloadButton} from '../components/reuseable/loading-and-error';
import { CHMSFoodRankList} from '../components/ranking-lists';
import { CHMSFoodWebChart } from '../components/charts';

export default class CHMSDeepMiningView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(activate) {
        this.setState ({
            isActive: activate
        });
    }

    render() {
        const subViews = {
            1: <img src={require('../static/percent_of obese_adults.jpg')} alt=""
                    className="img-responsive"/>,
            2:<img src={require('../static/percent_of_adults_with_diabetes.jpg')} alt=""
                   className="img-responsive"/>,
            3:<img src={require('../static/percent_of_adults_with_hypertension.jpg')} alt=""
                   className="img-responsive"/>
        };

        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <h3>4-Cluster</h3>
                        <Well><CHMSClusteringMap/></Well>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <h3>Food Nutrient</h3>
                        <Well><CHMSFoodWebChart /></Well>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3>Obesity</h3>
                        <ul className="nav nav-tabs">
                            <li role="presentation" className={this.state.isActive === 1?'active':null}
                                onClick={() => this.handleClick(1)}><a>Heat Map 1</a></li>
                            <li role="presentation" className={this.state.isActive === 2?'active':null}
                                onClick={() => this.handleClick(2)}><a>Heat Map 2</a></li>
                            <li role="presentation" className={this.state.isActive === 3?'active':null}
                                onClick={() => this.handleClick(3)}><a>Heat Map 3</a></li>
                        </ul>
                        <Well>
                            <CHMSComponentReloadButton />
                            {subViews[this.state.isActive]}
                        </Well>

                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Well>
                            <CHMSNutrientBarChart />
                        </Well>
                    </Col>
                </Row>
            </div>
        );
    }

}

