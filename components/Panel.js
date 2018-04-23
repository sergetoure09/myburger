import React,{Component} from 'react'
import Aux from'./Aux.js'
import Control from './Control.js'
import {connect} from 'react-redux'
import * as actionTypes from '../actions/actionTypes'

class Panel extends Component{
    constructor(props){
        super(props)
    }

render(){

    let ingredient_control=Object.entries(this.props.ingredients_list).map((el,i)=><Control 
                                                                                key={i} 
                                                                                ingredient={el[0]} 
                                                                                icon={el[1].icon}
                                                                                up={el[1].up}
                                                                                handleAdd={()=>this.props.addSelectedIngredient(el[0])} 
                                                                                handleRemove={()=>this.props.removeSelectedIngredient(el[0])}/>)
    return(
        <Aux classes="panel">
            {ingredient_control}
        </Aux>

    )
}
}

const mapStateToProps=state=>{
    return{
        ingredients_list:state.ingredient.ingredients_list
    }
}

const mapDispatchToProps= dispatch=>{
    
    return {
        addSelectedIngredient:(ing)=> dispatch({type:actionTypes.addSelectedIngredient,payload:{ingredient:ing,op:1}}),
        removeSelectedIngredient:(ing)=> dispatch({type:actionTypes.removeSelectedIngredient,payload:{ingredient:ing,op:0}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Panel)