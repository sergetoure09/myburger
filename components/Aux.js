import React from 'react'



const Aux=(props)=>{
    return(
        <div className={props.classes} id={props.id}>
        {props.children}
        </div>
    )
}


export default Aux