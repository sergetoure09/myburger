import React,{Component} from 'react'
import Aux from './Aux'


const withError=(WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
    
componentDidMount(){
    axios.interceptors.request.use(req=>{
        this.setState({
            error:null
        })

        return req
    })

    axios.interceptors.response.use(res=>res,error=>{
        this.setState({
            error:error
        })

        
    })
}
 render(){
     const style={
         color:"white"
     }
     return(
         <Aux>
             {this.state.error ? <div><h3 style={style}>An error occured</h3></div>:<WrappedComponent/>}
        </Aux>
     )
 } 
}
}


export default withError
