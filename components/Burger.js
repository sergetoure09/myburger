import React from 'react'


const Burger=(props)=>{
    return(
        <div className="burger">
        <div className="burger__bun-top"></div>
        {props.children}
        <div className="burger__bun-bottom"></div>
        </div>
    )
}

export default Burger