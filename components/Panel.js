import React from 'react'
import Aux from'./Aux.js'
import Control from './Control.js'

const Panel=props=>{
    let ingredient_control=Object.entries(props.ingredients_list).map((el,i)=><Control 
                                                                                key={i} 
                                                                                ingredient={el[0]} 
                                                                                icon={el[1].icon}
                                                                                up={el[1].up}
                                                                                handleAdd={()=>props.handleAdd(el[0])} 
                                                                                handleRemove={()=>props.handleRemove(el[0])}/>)
    return(
        <Aux classes="panel">
            {ingredient_control}
        </Aux>

    )
}

export default Panel