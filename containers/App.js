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
import Auth from './Auth'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import {withRouter} from 'react-router-dom'




class App extends Component{

    componentDidMount(){
        let token=localStorage.getItem('token')
        let uid=localStorage.getItem('uid')
        this.props.autoAuth(token,uid)
    }

    render(){
        return(
            <Aux>
                    <Header />
                   
                <Switch>
                <Route exact path="/orders" component={LastOrders}/>
                <Route exact path="/checkout/spin" component={Spinner}/>
                <Route exact path="/checkout" component={CheckoutPage}/>
                <Route exact path="/auth" component={Auth}/>
                <Route path="/" component={BuilderPage}/>  
                </Switch>
                
            </Aux>


        )
    }

}



const mapDispatchToProps=dispatch=>{
    return {
        autoAuth:(token,uid)=>dispatch(actionCreators.autoAuth(token,uid))
    }
}

export default withRouter(connect(null,mapDispatchToProps)(App))