import {combineReducers} from 'redux';
import appReducer from '../app/app.reducer';

const reducerList = {
  appReducer,
};

export const rootReducer = combineReducers(reducerList);
