import React from 'react'
import Aux from'./Aux.js'


const Panel=props=>{
    let ingredients=Object.keys(props.ingredients_list)
    return(
        <Aux>
            {ingredients}
        </Aux>

    )
}

export default Panel