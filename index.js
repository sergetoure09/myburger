import React from 'react'
import ReactDOM from 'react-dom'
import './public/index.css'
import App from './containers/App.js'
import {BrowserRouter as Router } from 'react-router-dom'
import {store} from './store/store'
import {Provider} from 'react-redux'


let root=document.querySelector("#root")

ReactDOM.render(
    <Provider store={store}>
            <Router>
                <App/>
            </Router>
    </Provider>,root);

