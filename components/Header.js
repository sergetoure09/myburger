import React from 'react'
import Aux from './Aux.js'
import {Link} from 'react-router-dom'



const Header=props=>{
    return(

        <Aux classes="header">
            <div className="header__logo"><a href="/" className="header__logo-link"><img src="./img/018-hamburger.svg"  className="header__logo-img" /></a></div>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <Link to='/' className="header__nav-link">compose your burger</Link>
                </li>

                <li className="header__nav-item">
                    <Link to='/orders'  className="header__nav-link">your lastest orders</Link>
                </li>
            </ul>

            <div className="header__auth">
            <ul className="header__auth-nav">
                <li className="header__auth-nav-item">
                    <a href="#" className="header__auth-nav-link">login</a>
                </li>

                <li className="header__auth-nav-item">
                    <a href="#" className="header__auth-nav-link">register</a>
                </li>

                 <li className="header__auth-nav-item">
                    <a href="#" className="header__auth-nav-link"><i className="material-icons header__user md-36">account_circle</i></a>
                </li>
            </ul>
            </div>

        </Aux>

    )
}

export default Header