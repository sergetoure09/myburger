import React from 'react'
import ReactDOM from 'react-dom'
import './public/index.css'
import App from './containers/App.js'
import {BrowserRouter as Router } from 'react-router-dom'


let root=document.querySelector("#root")

ReactDOM.render(
<Router>
    <App/>
</Router>,root);

