// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import homeHandleApp from './store/home/reducers'
import RouterConfig from  './router/index'


let store=createStore(homeHandleApp)
let rootElement=document.getElementById('root')


render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>,
    rootElement
)