import React from 'react'

const Ingredient=props=>{
    switch(props.type){
        case "cheese":
        return <div className="burger__cheese"></div>

        case "patty":
        return <div className="burger__patty"></div>

        case "tomato":
        return <div className="burger__tomato"></div>

        case "onion":
        return <div className="burger__onion"></div>

        case "pickle":
        return <div className="burger__pickle"></div>

        case "meatball":
        return <div className="burger__meatball"></div>
        
    }
}


export default Ingredient