import React,{Component} from 'react'
import Aux from './Aux'


const withError=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:undefined
        }
    
componentDidMount(){
    axios.interceptors.request.use(req=>{
        this.setState({
            error:undefined
        })

        return req
    })

    axios.interceptors.response.use(res=>res,err=>{
        this.setState({
            error:error
        })

        return res
    })
}
 render(){
     return(
         <Aux>
             {this.state.error ? <div><h1>An error occured</h1><h2>{this.state.error.message}</h2></div>:<WrappedComponent/>}
        </Aux>
     )
 } 
}
}


export default withError
