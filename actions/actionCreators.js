// export const addSelectedIngredient="ADD_SELECTED_INGREDIENT"
// export const removeSelectedIngredient="REMOVE_SELECTED_INGREDIENT"
// export const pullIngredientList="PULL_INGREDIENT_LIST"
import * as actionTypes from './actionTypes'
import {authRegisterNewUser as axios} from '../components/axiosInstance'
import * as firebase from 'firebase'

export const authStart=()=>{
    console.log('Starting authentication process...')
    return {
        type:actionTypes.AUTH_START,
       
    }
}

export const authSuccess=(response)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        payload:response
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
        let authData={
            email:email,
            password:password,
            returnsecureToken:true
        }
setTimeout(firebase.auth().signInWithEmailAndPassword(authData.email,authData.password)
.then(response=>{
    console.log('response is '+response)
dispatch(authSuccess(response))
        })
.catch(error=>{
    if(error.code=="auth/user-not-found"){
        console.log("creating user not existing")
        firebase.auth().createUserWithEmailAndPassword(authData.email,authData.password).then(response=>{
            console.log("user successfully created.User will be automaticlly connected"+response)
            dispatch(authSuccess(response))
        }).catch(error=>{
            console.log('oops an error occured',error)
            dispatch(authFail((error)))
            console.log('${error.code}:${error.message}')

        })
    }else{
        console.log('oops an error occured')
        dispatch(authFail(error))

    }

}),5000)



      
    }
}