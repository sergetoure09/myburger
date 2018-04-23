import * as actionTypes from '../actions/actionTypes'

let initialState={
    authenticated:false
}


export const authReducer=(state=initialState,{type,payload=false})=>{
    switch(type){
        case actionTypes.AUTH_START:
        return state

        case actionTypes.AUTH_SUCCESS:
        return {
        ...state,
        authenticated:payload
        }
    
        case actionTypes.AUTH_FAIL:
        return state

        default:
        return state
    }
}
