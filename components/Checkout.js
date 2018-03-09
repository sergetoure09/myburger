import React from 'react'
import Aux from './Aux'



const Checkout=props=>{
    let classes=["checkout-btn--isDisabled"]
    if (props.totalPrice>0){
        classes.push("checkout-btn")
    }
    return(
        <Aux>
           <a href="#backdrop" className={classes.join(" ")}>
            <i className="material-icons md-36 checkout-btn__icon">shopping_cart</i>
            &nbsp;&nbsp;
            checkout&nbsp;&nbsp;  
            <span className="checkout-btn__price">&#36;{props.totalPrice}</span>
        </a>  
        </Aux>              
       

    )
}
export default Checkout