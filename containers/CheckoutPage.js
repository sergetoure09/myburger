import React,{Component} from 'react'
import Aux from '../components/Aux'
import OrderForm from './OrderForm'


class CheckoutPage extends Component{

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <Aux>
                <h2>You are just one step away !</h2>
            <Aux classes="checkout-page">
            <img className="checkout-page__img-box" src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db4ad901fa9d778a5878044dc58a29cf&auto=format&fit=crop&w=1950&q=80" alt="checkout image"/>
            <OrderForm />
            </Aux>
            </Aux>
        )
    }

}


export default CheckoutPage

//https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db4ad901fa9d778a5878044dc58a29cf&auto=format&fit=crop&w=1950&q=80
//https://images.unsplash.com/photo-1518304256228-bb65fd3df672?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67f3dae2c86fb8fc1009e5cc823cec19&auto=format&fit=crop&w=1017&q=80