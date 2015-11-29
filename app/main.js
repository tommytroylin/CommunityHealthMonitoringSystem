/**
 * Created by Tommy on 11/24/15.
 */

// entrance for the whole app
import React from 'react';
import ReactDOM from 'react-dom';
import CHMSNavBar from './components/navbar';
import CHMSLogo from './components/logo';
import CHMSNavBarRouter from './routers/navbar'
import CHMSFooter from './components/footer'
import { Provider } from 'react-redux';
import { store } from './redux/store/app';

require('bootstrap/dist/css/bootstrap.min.css');

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <CHMSNavBar />
                    <CHMSLogo/>
                    <hr/>
                    {CHMSNavBarRouter}
                    <hr/>
                    <CHMSFooter />
                </div>
            </Provider>

        );
    }
}
ReactDOM.render(<App />, window.document.getElementById("app"));
