import React,{Component} from 'react'
import Aux from '../components/Aux'


class CheckoutPage extends Component{

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <Aux classes="checkout">
                <h1>This is the Checkout page</h1>
            </Aux>
        )
    }

}


export default CheckoutPage