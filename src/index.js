import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import logMiddleware from 'redux-log';

import App from './containers/App';

import rootReducer from './reducers';

import { getList, fetchDataStart } from './actions';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunkMiddleware]

let store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(...middleware)
);

store.subscribe(() => {
    console.log('store refresh', store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
