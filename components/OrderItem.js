import React from 'react'
import Aux from './Aux.js'


const OrderItem=props=>{
    return(
        <Aux classes="controller">
        <img src={props.icon} className="controller__icon" alt="ingredient icon"/>
        <span className="controller__ingredient">{props.ingredient}</span>
        {props.quant}
        </Aux>
    )
}

export default OrderItem