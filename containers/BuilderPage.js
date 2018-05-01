import React,{Component} from 'react'
import Aux from '../components/Aux.js'
import Builder from '../components/Builder.js'
import Checkout from '../components/Checkout.js'
import Backdrop from '../components/Backdrop.js'
import OrderSummary from '../components/OrderSummary.js'
import {instance} from '../components/axiosInstance'
import {connect} from 'react-redux'
import * as actionTypes from "../actions/actionTypes"


class BuilderPage extends Component {
        state={
            burger_name:"Giant Burger",
            // burgerPrice:0,
            // selected_ingredients:[],
            // ingredients_list:
            //                     {
            //                         // cheese:{up:4,icon:"./img/009-tortillas.svg"},
            //                         // tomato:{up:2,icon:"./img/014-tomato.svg"},
            //                         // patty:{up:5,icon:"./img/006-steak.svg"},
            //                         // pickle:{up:1,icon:"./img/008-pickle.svg"},
            //                         // meatball:{up:0.5,icon:"./img/003-meatball.svg"},
            //                         // onion:{up:0.5,icon:"./img/002-onion.svg"},
            //                         // // klaklo:{up:0.5,icon:"./img/018-hamburger.svg"}
                                    
            //                     }
        
        }
    // updatePrice=(el,op)=>{
    //         let totalPrice=this.state.burgerPrice
    //         op == 1 ? totalPrice+=this.state.ingredients_list[el].up:totalPrice-=this.state.ingredients_list[el].up
    //         totalPrice < 0 ? totalPrice=0 : totalPrice=totalPrice
    //         this.setState({
    //             burgerPrice:Number.parseFloat(totalPrice.toFixed(1))
    //         })    
    //     }

    // addIngredient=(el)=>{
    //     let new_ingredients=[...this.state.selected_ingredients]
    //     new_ingredients.push(el)
    //     this.setState({
    //         selected_ingredients:new_ingredients
    //     })
    //     this.updatePrice(el,1)
    // }

//     removeIngredient=(el)=>{
//         let new_ingredients=[...this.state.selected_ingredients]
       
//        if( new_ingredients.indexOf(el) !=-1) {
//                          new_ingredients.splice(new_ingredients.indexOf(el),1)
//         this.setState({
//             selected_ingredients:new_ingredients
//         })
//         this.updatePrice(el,0)
        
//     }
// }
    componentWillMount=()=>{
        //console.log(this.props)
        // axios.get('/inggredients.json').then(resp=>{
        //     console.log(resp.config)
        //     this.setState({
        //         ingredients_list:resp.data
        //     })
        // })

        this.props.pullIngredientList('/inggredients.json')
    }
    // shouldComponentUpdate(){
    //     return this.props.selected_ingredients
    // }
    
    render(){
        
        return(
            <Aux id="main">

                <Backdrop>
                <OrderSummary 
                                ingredients={this.props.selected_ingredients} 
                                totalPrice={this.props.burgerPrice} 
                                burger_name={this.state.burger_name} 
                                ingredients_list={this.props.ingredients_list} 
                    />
                </Backdrop>
                <Checkout totalPrice={this.props.burgerPrice} />
                <Builder 
                        ingredients={this.props.selected_ingredients}
                        ingredients_list={this.props.ingredients_list} 
                        // handleAdd={this.props.addSelectedIngredient} 
                        // handleRemove={this.props.removeSelectedIngredient} 
                        />
            </Aux>
        )
    }

}

const mapStateToProps= (state) =>{
    
    return{
        selected_ingredients:state.ingredient.selected_ingredients,
        burgerPrice:state.ingredient.burgerPrice,
        ingredients_list:state.ingredient.ingredients_list,
        auth:state.auth
    }
}

const mapDispatchToProps= dispatch=>{
    return{
//         pullIngredientList:(url)=>{
//             axios.get(url).then(list=>{
//                 //console.log(resp.config)
//                 dispatch({type:actionTypes.pullIngredientList,payload:list.data})
//             })        
//     }
// }
        pullIngredientList:(url)=>dispatch((dispatch)=>{
        instance.get(url).then(list=>{
                        //console.log(resp.config)
                        dispatch({type:actionTypes.pullIngredientList,payload:list.data})
                    })        

})
}
}


export default connect(mapStateToProps,mapDispatchToProps)(BuilderPage)