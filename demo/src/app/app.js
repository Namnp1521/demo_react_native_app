import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducer/index';
import {Provider as ReduxProvider} from 'react-redux';

import Home from '../components/home/home';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  );
};

export default App;
