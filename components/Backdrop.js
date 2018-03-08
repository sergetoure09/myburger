import  React from 'react'
import Aux from './Aux.js'



const Backdrop =props=>{
    return(
        <Aux classes="backdrop" id="backdrop">
        {props.children}
        </Aux>


    )
}
export default Backdrop