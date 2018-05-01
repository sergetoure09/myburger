import React,{Component} from 'react'
import Aux from './Aux'
import {instance as axios} from './axiosInstance'
import {connect} from 'react-redux'
import * as actionTypes from '../actions/actionTypes'



class LastOrders extends Component{
    componentDidMount(){
        const queryParams='?auth='+this.props.auth.token+'&orderBy="uid"&equalTo="' +this.props.auth.userId+ '"'
       this.props.isAuth ? this.props.getOrders("order.json"+queryParams):
       this.props.history.replace({
           pathname:'./auth'
       })
    }

    render(){
        let orders=this.props.orders.map((el,i)=><h3 key={i}>{el.name}</h3>)
        return(
            <Aux>
                <h1>Your latest orders</h1>
                {orders}

                </Aux>
        )

    
    }

}


export default connect(
    (state)=>{
        return {
            orders:state.orders.orders,
            auth:state.auth,
            isAuth:state.auth.token !=null
           
        }
    },
    (dispatch)=>{
        return{
            getOrders:(url)=>dispatch((dispatch)=>{
                axios.get(url).then(response=>{
                    console.log(Object.values(response.data))
                    dispatch({type:actionTypes.pullOrders,payload:Object.values(response.data)})
                })

            })
        }
    }
)(LastOrders)