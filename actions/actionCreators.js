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


export const autoAuth=(token,uid)=>{
    return {
        type:actionTypes.AUTO_AUTH,
        payload:{token,uid}

    }

}

export const authSuccess=(token,uid)=>{
    localStorage.setItem('token',token)
    localStorage.setItem('uid',uid)
    return {
        type:actionTypes.AUTH_SUCCESS,
        payload:{token,uid}
    }
}

export const authFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        payload:error
    }
}
export const autoLogout=time=>{
    return dispatch=>{
       setTimeout(()=> {
           dispatch({ type:actionTypes.AUTH_LOGOUT})
       },time)
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
        
firebase.auth().signInWithEmailAndPassword(authData.email,authData.password)
.then(response=>{
    let autoLogoutTime=36000000
    let uid=response.uid

response.getIdToken().then(token=>{
     console.log('response is '+token)
dispatch(authSuccess(token,uid))
dispatch(autoLogout(autoLogoutTime)) //auto logout after 3600s
        })})
.catch(error=>{
    if(error.code=="auth/user-not-found"){
        console.log("creating user not existing")
        firebase.auth().createUserWithEmailAndPassword(authData.email,authData.password).then(response=>{
            let uid=response.uid
            response.getIdToken().then(token=>{
                
                console.log("user successfully created.User will be automaticlly connected"+response)
                dispatch(authSuccess(token,uid))     
            })
            
            
        }).catch(error=>{
            console.log('oops an error occured',error)
            dispatch(authFail((error)))
            console.log('${error.code}:${error.message}')

        })
    }else{
        console.log('oops an error occured')
        dispatch(authFail(error))

    }

})



      
    }
}