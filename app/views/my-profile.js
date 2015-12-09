import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { CHMSProfileFoodChart } from '../components/charts';
import { CHMSProfileSportList } from '../components/ranking-lists';

export default class CHMSMyProfileView extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (window.$('#knobInject')).knob({
      angleOffset: -110,
      angleArc: 220,
      fgColor: "#66CC66",
      height: 135
    });
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12} md={10} mdPush={1} lg={8} lgPush={2}>
              <Panel header={ <h3>Sentiment</h3>}>
                <Grid fluid>
                  <Row>
                    <Col xs={12} className="text-center">
                      <input id="knobInject" type="text" value="75" className="dial" readOnly />
                    </Col>
                  </Row>
                </Grid>
              </Panel>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={10} mdPush={1} lg={8} lgPush={2}>
              <Panel header={ <h3>Food</h3>}>
                <Grid fluid>
                  <Row>
                    <Col xs={12}>
                      <CHMSProfileFoodChart />
                    </Col>
                  </Row>
                </Grid>
              </Panel>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={10} mdPush={1} lg={8} lgPush={2}>
              <Panel header={ <h3>Sports</h3>}>
                <Grid fluid>
                  <Row>
                    <Col xs={12}>
                      <CHMSProfileSportList />
                    </Col>
                  </Row>
                </Grid>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

