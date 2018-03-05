import React from 'react'
import Burger from './Burger.js'
import Panel from './Panel.js'
import Aux from './Aux.js'


const Builder = props =>{
    return(
        <Aux classes="container">
            <Aux classes="row">
                <Aux classes="col-2-of-4">
                <h1>Burger builder</h1>
                    <Burger ingredients={props.ingredients}/>
                </Aux>
                <Aux classes="col-2-of-4">
                <h1>Control panel</h1>
                    <Panel ingredients_list={props.ingredients_list}/>
                </Aux>
            </Aux>
        </Aux>
    )
}

export default Builder