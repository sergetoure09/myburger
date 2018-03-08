import React from 'react'
import Aux from './Aux.js'
import Burger from './Burger'
import OrderItem from './OrderItem'


const OrderSummary=props=>{
    //function to convert array to object
    const arrtoobj=(arr)=>{
        let theobj={}; 
        for(let i of arr){if (theobj[i]==undefined){theobj[i]=1 }
                            else {theobj[i]+=1}} 
                            return theobj}

    let ingredientsObj=arrtoobj(props.ingredients)
    let ingredient_item=Object.entries(ingredientsObj).map((el,i)=><OrderItem
                                                                key={i} 
                                                                quant={el[1]}
                                                                ingredient={el[0]} 
                                                                icon={props.ingredients_list[el[0]].icon}
                                                                up={props.ingredients_list[el[0]].up}
                                                                />)
    return(
        <Aux classes="order-summary">
        <a href="#main" className="close-btn">&times;</a>
        <Aux classes="container">
        <Aux classes="row">
                <Aux classes="col-2-of-4">
                <h2 className="order-price">Total price is $ {props.totalPrice}</h2>
                <Burger ingredients={props.ingredients}/>
                </Aux>
                <Aux classes="col-2-of-4">
                <h1>Confirm your order !</h1>
                {ingredient_item}
                <a href="" className="order-btn order-btn--confirm">confirm</a>
                <a href="#main" className="order-btn order-btn--edit">edit</a>
                <a href="/" className="order-btn order-btn--abort">abort</a>
                
                </Aux>
        </Aux>
        </Aux>
        
        </Aux>

    )
}

export default OrderSummary