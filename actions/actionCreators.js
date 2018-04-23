// export const addSelectedIngredient="ADD_SELECTED_INGREDIENT"
// export const removeSelectedIngredient="REMOVE_SELECTED_INGREDIENT"
// export const pullIngredientList="PULL_INGREDIENT_LIST"
import * as actionTypes from './actionTypes'
import {authRegisterNewUser as axios} from '../components/axiosInstance'

export const authStart=()=>{
    return {
        type:actionTypes.AUTH_START,
       
    }
}

export const authSuccess=(authData)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        payload:authData
    }
}

export const authFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        payload:error
    }
}


export const onAuth=({name,email,password})=>{
    return dispatch =>{
        dispatch(authStart())
        let API_KEY="AIzaSyALvQ3eMe5rzQoZGfuYjRLzYWuiD_EpOKc"
        let authData={
            email:email,
            password:password,
            returnsecureToken:true
        }
//async request to firebase.auth
axios.post('/signupNewUser?key='+API_KEY,authData).then(response=>{
                                    console.log(response)
                                    dispatch(authSuccess(response.data))
                                    })
                                    .catch(error=>{
                                    console.log(error)
                                    dispatch(authFail(error))
                                    })


      
    }
}