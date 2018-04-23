import * as actionTypes from '../actions/actionTypes'

let initialState={
    selected_ingredients:[],
    burgerPrice:0,
    ingredients_list:
    {
        // cheese:{up:4,icon:"./img/009-tortillas.svg"},
        // tomato:{up:2,icon:"./img/014-tomato.svg"},
        // patty:{up:5,icon:"./img/006-steak.svg"},
        // pickle:{up:1,icon:"./img/008-pickle.svg"},
        // meatball:{up:0.5,icon:"./img/003-meatball.svg"},
        // onion:{up:0.5,icon:"./img/002-onion.svg"},
        // // klaklo:{up:0.5,icon:"./img/018-hamburger.svg"}
        
    }

}

const updatePrice=(el,op,state)=>{
    let totalPrice=state.burgerPrice
    op == 1 ? totalPrice+=state.ingredients_list[el].up:totalPrice-=state.ingredients_list[el].up
    totalPrice < 0 ? totalPrice=0 : totalPrice=totalPrice
    // this.setState({
    //     burgerPrice:Number.parseFloat(totalPrice.toFixed(1))
    // })    
    return totalPrice
}

export const ingredientReducer=(state=initialState,{type,payload})=>{
    let totalPrice
   switch(type){
       case actionTypes.addSelectedIngredient:
       let newIngredient=[...state.selected_ingredients]
       newIngredient.push(payload.ingredient)
      totalPrice= updatePrice(payload.ingredient,payload.op,state)

      return {
          ...state,
          selected_ingredients:newIngredient,
         burgerPrice:totalPrice
      }

       case actionTypes.removeSelectedIngredient:
       let new_ingredient=[...state.selected_ingredients]
       if( new_ingredient.indexOf(payload.ingredient) !=-1) {
                         new_ingredient.splice(new_ingredient.indexOf(payload.ingredient),1)

                         totalPrice=updatePrice(payload.ingredient,payload.op,state)

        return {
            ...state,
            selected_ingredients:new_ingredient,
           burgerPrice:totalPrice
        }
       }else return state
      // new_ingredient=new_ingredient.filter(el=>new_ingredient.indexOf(el)!=new_ingredient.indexOf(payload.ingredient))
       
       


        case actionTypes.pullIngredientList:
        return {
            ...state,
            ingredients_list:payload
        }
        default:
        return state
        
    }
   }
