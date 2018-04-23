import axios from 'axios'



export const instance=axios.create({
    baseURL:'https://reactburger-19d68.firebaseio.com/'
})


export const authRegisterNewUser=axios.create({
    baseURL:'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

