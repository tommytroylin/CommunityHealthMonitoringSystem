/**
 * Created by Tommy on 11/30/15.
 */
import React from 'react';
import {Row, Col, Input, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/sentiment-score';

class CHMSSentimentScore extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.knob = this.knob.bind(this);
        this.handleRetry = this.handleRetry.bind(this);
    }

    componentDidUpdate() {
        this.knob()
    }

    knob() {
        (window.$('.scoreKnob')).knob({
            angleOffset: -110,
            angleArc: 220,
            fgColor: "#66CC66",
            height: 135,
            width: 160,
            thickness: .3
        })
    }

    handleClick() {
        if (this.props.apiAddress !== null && this.props.apiAddress !== undefined) {
            this.props.dispatch(actions.fetchScoreData(this.props.apiAddress, this.refs.input.getValue()))
        }
    }
    handleRetry() {
        this.props.dispatch(actions.requireScoreData());
    }

    render() {
        const views = [(
            <div >
                <Input ref="input" type="text" label="{{Placeholder}}" bsSize="large" placeholder="Large text"
                       buttonAfter={<Button onClick={this.handleClick}>Click me</Button>}/>

            </div>), (
            <div className="text-center">
                <input className="knob scoreKnob" value={this.props.score} readOnly />
                <Button onClick={this.handleRetry}>Retry</Button>
            </div>
        )];
        return (
            <Row>
                <Col xs={12} sm={10} smPush={1} md={8} mdPush={2} lg={6} lgPush={3}>
                    {this.props.onState === 'FETCHING' ? views[0] : null}
                    {this.props.onState === 'ERROR' ? views[1] : null}
                    {this.props.onState === 'DRAWN' ? views[1] : null}
                </Col>
            </Row>
        );
    }

}
export default connect((state) => {
    return {
        onState: state.sentimentScore.onState,
        score: state.sentimentScore.score
    }
}, undefined, undefined, {withRef: true})(CHMSSentimentScore)

