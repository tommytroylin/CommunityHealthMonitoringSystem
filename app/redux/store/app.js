import {combineReducers ,createStore } from 'redux';
import reducer from '../reducers/heat-map';

export const store = createStore(reducer);
