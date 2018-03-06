import React from 'react'
import Aux from './Aux'



const Checkout=props=>{
    return(
        <Aux>
        <a href="#" className="checkout-btn checkout-btn--isDisabled" >
            <i class="material-icons md-36 checkout-btn__icon">shopping_cart</i>
            &nbsp;&nbsp;
            checkout&nbsp;&nbsp;  
            <span className="checkout-btn__price">&#36;{props.totalPrice}</span>
        </a>  
        </Aux>              
       

    )
}
export default Checkout