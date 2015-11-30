import {createStore, applyMiddleware} from 'redux';
import {reducers} from '../reducers/all-reducers';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger();

export const store = (applyMiddleware(thunk, loggerMiddleware)(createStore))(reducers);
