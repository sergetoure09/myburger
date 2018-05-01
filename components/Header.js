import React,{Component} from 'react'
import Aux from './Aux.js'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionTypes from '../actions/actionTypes'
import {withRouter} from 'react-router-dom'



class Header extends Component{

    logmeout(){
        this.props.logout()
        this.props.history.replace({
            pathname:'/'
        })
    }
   render(){return(

        <Aux classes="header">
            <div className="header__logo">
                <a href="/" className="header__logo-link">
                        <img src="./img/018-hamburger.svg"  className="header__logo-img" />
                </a>
            </div>

            <ul className="header__nav">
                <li className="header__nav-item">
                    <Link to='/' className="header__nav-link">compose your burger</Link>
                </li>
                {this.props.isAuth ?
                <React.Fragment>
                         <li className="header__nav-item">
                    <Link to='/orders'  className="header__nav-link">your lastest orders</Link>
                        </li>
                </React.Fragment>:null}
               
            </ul>
        

            <div className="header__auth">
            <ul className="header__auth-nav">
            {this.props.isAuth ? 
            <React.Fragment>
                <li className="header__auth-nav-item">
                    <a href="#" className="header__auth-nav-link" onClick={()=>this.logmeout()}>logout</a>
                </li>
                <li className="header__auth-nav-item">
                    <i className="material-icons header__user md-36">account_circle</i>
                </li>
            </React.Fragment>:
            <React.Fragment>
                <li className="header__auth-nav-item">
                <Link to="/auth" className="header__auth-nav-link">login</Link>
                </li>
                <li className="header__auth-nav-item">
                <Link to="/auth" className="header__auth-nav-link">register</Link>
                </li>
            </React.Fragment>
                }
            </ul>
            </div>

        </Aux>

    )}
}


const mapStateToProps=state=>{
    return{
        isAuth:state.auth.token!=null
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        logout:()=>dispatch((dispatch)=>{
            localStorage.removeItem('token')
            localStorage.removeItem('uid')
           dispatch({type:actionTypes.AUTH_LOGOUT})})
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))