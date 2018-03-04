import React from 'react'
import Burger from './Burger.js'
import Panel from './Panel.js'
import Aux from './Aux.js'


const Builder = props =>{
    return(
        <Aux>
            <Burger ingredients={props.ingredients}/>
            <Panel/>
        </Aux>
    )
}

export default Builder