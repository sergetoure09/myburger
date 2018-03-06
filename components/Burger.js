import React from 'react'
import Ingredient from './Ingredient.js'



const Burger=(props)=>{

    let ingredients=props.ingredients.map((el,i)=><Ingredient key={i} type={el}/>)




    
    return(
        
        <div className="burger">
        <div className="burger__bun-top"></div>
        {ingredients.length > 0 ? ingredients : <Ingredient/> }
        <div className="burger__bun-bottom"></div>
        <div className="plate"></div>
        </div>

       
    )
}

export default Burger