import React from 'react'
import Aux from './Aux.js'


const Control=props=>{
    return(
        <Aux classes="controller">
        <span className="controller__ingredient">{props.ingredient}</span>
        <div className="controller__control-btn">
        <i class="material-icons md-18 controller__btn controller__btn--add" onClick={props.handleAdd}>add</i>
        <i class="material-icons md-18 controller__btn controller__btn--remove" onClick={props.handleRemove}>remove</i>
        </div>
        </Aux>
    )
}

export default Control