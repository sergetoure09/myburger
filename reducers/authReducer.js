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

        case actionTypes.AUTO_AUTH:
        return {
            ...state,
            token:payload.token,
            userId:payload.uid
        }
        
        case actionTypes.AUTH_SUCCESS:
        return {
        ...state,
        token:payload.token,
        userId:payload.uid,
        error:null,
        loading:false,
        //userId:payload.uid,


        }
    
        case actionTypes.AUTH_FAIL:
        return {
            ...state,
            error:payload,
            loading:false
        }

        case actionTypes.AUTH_LOGOUT:
        return {
            ...state,
            //userId:null,
            token:null,
            uid:null
        }

        default:
        return state
    }
}
