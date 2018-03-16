import axios from 'axios'



const instance=axios.create({
    baseURL:'https://reactburger-19d68.firebaseio.com/'
})

export default instance