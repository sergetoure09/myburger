import React,{Component} from 'react'
import Aux from './Aux'
import {instance as axios} from './axiosInstance'
import {connect} from 'react-redux'
import * as actionTypes from '../actions/actionTypes'



class LastOrders extends Component{
    componentDidMount(){
        this.props.getOrders('order.json')
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
            orders:state.orders.orders
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