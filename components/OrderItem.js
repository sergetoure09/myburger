import React from 'react'
import Aux from './Aux.js'


const OrderItem=props=>{
    return(
        <Aux classes="order-item">
        <Aux classes="controller">
            <img src={props.icon} className="controller__icon" alt="ingredient icon"/>
            <span className="controller__ingredient">{props.ingredient}</span>
            <Aux classes="controller__item-price">
           <span className="quant"> &times;{props.quant}</span> <span className="up">&#36;{props.up}/each</span>
            </Aux>
        </Aux>
        </Aux>
    )
}

export default OrderItem