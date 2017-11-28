import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import logMiddleware from 'redux-log';

import App from './containers/App';

import rootReducer from './reducers';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

let rootStore = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(thunk, logMiddleware)
);

rootStore.subscribe(() => {
    console.log(rootStore.getState())
})


ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
