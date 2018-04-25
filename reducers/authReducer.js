import * as actionTypes from '../actions/actionTypes'
import { authStart } from '../actions/actionCreators';

let initialState={
   token:null,
   userId:null,
   error:false,
   loading:false
}
const authStarter=(state,payload)=>{
    return{
    ...state,
    loading:true }

}

export const authReducer=(state=initialState,{type,payload=false})=>{
    switch(type){
        case actionTypes.AUTH_START: return authStarter(state,payload)
        
        case actionTypes.AUTH_SUCCESS:
        return {
        ...state,
        token:payload.refreshToken,
        error:null,
        loading:false,
        userId:payload.uid,


        }
    
        case actionTypes.AUTH_FAIL:
        return {
            ...state,
            error:payload,
            loading:false
        }

        default:
        return state
    }
}
