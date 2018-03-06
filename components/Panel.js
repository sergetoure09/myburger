import React from 'react'
import Aux from'./Aux.js'
import Control from './Control.js'

const Panel=props=>{
    let ingredient_control=Object.keys(props.ingredients_list).map((el,i)=><Control 
                                                                                key={i} 
                                                                                ingredient={el} 
                                                                                handleAdd={()=>props.handleAdd(el)} 
                                                                                handleRemove={()=>props.handleRemove(el)}/>)
    return(
        <Aux classes="panel">
            {ingredient_control}
        </Aux>

    )
}

export default Panel