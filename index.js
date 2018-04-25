import React from 'react'
import ReactDOM from 'react-dom'
import './public/index.css'
import App from './containers/App.js'
import {BrowserRouter as Router } from 'react-router-dom'
import {store} from './store/store'
import {Provider} from 'react-redux'
import * as firebase from 'firebase'





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyALvQ3eMe5rzQoZGfuYjRLzYWuiD_EpOKc",
    authDomain: "reactburger-19d68.firebaseapp.com",
    databaseURL: "https://reactburger-19d68.firebaseio.com",
    projectId: "reactburger-19d68",
    storageBucket: "reactburger-19d68.appspot.com",
    messagingSenderId: "44769782861"
  };
  
  
  firebase.initializeApp(config);



let root=document.querySelector("#root")

ReactDOM.render(
    <Provider store={store}>
            <Router>
                <App/>
            </Router>
    </Provider>,root);

