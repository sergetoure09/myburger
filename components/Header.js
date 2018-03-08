import React from 'react'
import Aux from './Aux.js'


const Header=props=>{
    return(

        <Aux classes="header">
            <div className="header__logo"><a href="/" className="header__logo-link"><img src="./img/018-hamburger.svg"  className="header__logo-img" /></a></div>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">compose your burger</a>
                </li>

                <li className="header__nav-item">
                    <a href="#" className="header__nav-link">your lastest orders</a>
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
                    <a href="#" className="header__auth-nav-link"><i class="material-icons header__user md-36">account_circle</i></a>
                </li>
            </ul>
            </div>

        </Aux>

    )
}

export default Header