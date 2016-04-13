import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import AppReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(
    AppReducers,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
