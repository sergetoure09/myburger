import React from 'react'
import Aux from'./Aux.js'

const Panel=props=>{
    let ingredients=Object.keys(props.ingredients_list)
    return(
        <Aux classes="panel">
        
        <Aux classes="controller">
        <span className="controller__ingredient">Cheese</span>
        <div className="controller__control-btn">
        <button className=" controller__btn controler__btn--add">Add</button>
        <button className=" controller__btn controler__btn--remove">Remove</button>
        </div>
        </Aux>

         <Aux classes="controller">
        <span className="controller__ingredient">Tomato</span>
        <div className="controller__control-btn">
        <button className=" controller__btn controler__btn--add">Add</button>
        <button className=" controller__btn controler__btn--remove">Remove</button>
        </div>
        </Aux>
            
        </Aux>

    )
}

export default Panel