import * as actionTypes from '../actions/actionTypes'
let initialState={
    orders:[]
}



export const ordersReducer=(state=initialState,{type,payload})=>{
   switch(type){
        case actionTypes.pullOrders:
        let newOrders=[]
        newOrders=newOrders.concat(payload)
        return {
            ...state,
            orders:newOrders
        }
    default:
    return state

    }


    
}


