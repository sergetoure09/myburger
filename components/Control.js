import React from 'react'
import Aux from './Aux.js'


const Control=props=>{
    return(
        <Aux classes="controller">
        <img src={props.icon} className="controller__icon" alt="ingredient icon"/>
        <span className="controller__ingredient">{props.ingredient}</span>
        <div className="controller__control-btn">
        <i className="material-icons md-18 controller__btn controller__btn--add" onClick={props.handleAdd}>add</i>
        <i className="material-icons md-18 controller__btn controller__btn--remove" onClick={props.handleRemove}>remove</i>
        </div>
        </Aux>
    )
}

export default Control