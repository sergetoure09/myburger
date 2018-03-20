import React,{Component} from 'react'
import Aux from '../components/Aux'
import Header from '../components/Header.js'
import BuilderPage from './BuilderPage.js'
import CheckoutPage from './CheckoutPage.js'
import {Route,
        Switch} from 'react-router-dom'
import Spinner from '../components/Spinner'
import LastOrders from '../components/LastOrders'
import axios from 'axios';
import withError from '../components/withError';




class App extends Component{

    render(){
        return(
            <Aux>
                    <Header />
                <Switch>
                <Route exact path="/orders" component={LastOrders}/>
                <Route exact path="/checkout/spin" component={Spinner}/>
                <Route exact path="/checkout" component={CheckoutPage}/>
                <Route path="/" component={BuilderPage}/>  
                </Switch>
                
            </Aux>


        )
    }

}

export default App