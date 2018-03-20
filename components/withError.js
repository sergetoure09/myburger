import React,{Component} from 'react'
import Aux from './Aux'


const withError=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:false
        }
    
componentDidMount(){
    axios.interceptors.request.use(req=>req,err=>{
        this.setState({
            error:true
        })

        return Promise.reject(err)
    })

    axios.interceptors.response.use(resp=>resp,err=>{
        this.setState({
            error:true
        })

        return Promise.reject(err)
    })
}
 render(){
     return(
         <Aux>
             {this.state.error?<h1>An error occured</h1>:<WrappedComponent/>}
        </Aux>
     )
 } 
}
}


export default withError
