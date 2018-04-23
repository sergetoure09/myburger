import React,{Component} from 'react'
import Aux from './Aux.js'
import Burger from './Burger'
import OrderItem from './OrderItem'
import {Link,withRouter} from 'react-router-dom'


class OrderSummary extends Component{
    //function to convert array to object
    arrtoobj=(arr)=>{
        let theobj={}; 
        for(let i of arr){if (theobj[i]==undefined){theobj[i]=1 }
                            else {theobj[i]+=1}} 
                            return theobj
                        }

    goToCheckoutPage=()=>{
       
                            this.props.history.replace({
                                                            pathname:this.props.match.url+"checkout",
                                                            hash:'',
                                                            search:'',
                                                            params:'',
                                                            state:{
                                                                ingredients:this.arrtoobj(this.props.ingredients),
                                                                price:this.props.totalPrice
                                                            }

                                                        
                                                        })
                        }


    componentDidMount(){
        console.log(this.props)
    }
    // shouldComponentUpdate(){
    //     return this.props.ingredient!=undefined
    // }
    render(){

    let ingredientsObj=this.arrtoobj(this.props.ingredients)
    let ingredient_item=Object.entries(ingredientsObj).map((el,i)=><OrderItem
                                                                key={i} 
                                                                quant={el[1]}
                                                                ingredient={el[0]} 
                                                                icon={this.props.ingredients_list[el[0]].icon}
                                                                up={this.props.ingredients_list[el[0]].up}
                                                                />)
    return(
        <Aux classes="order-summary">
        <a href="#main" className="close-btn">&times;</a>
        <Aux classes="container">
        <Aux classes="row">
                <Aux classes="col-2-of-4">
                <h2 className="order-price">Only ${this.props.totalPrice}</h2>
                <Burger ingredients={this.props.ingredients}/>
                </Aux>
                <Aux classes="col-2-of-4">
                <h1>Confirm your order !</h1>
                {ingredient_item}
                <button onClick={this.goToCheckoutPage} className="order-btn order-btn--confirm">confirm</button>
                <a href="#main" className="order-btn order-btn--edit">edit</a>
                <a href="/" className="order-btn order-btn--abort">abort</a>
                
                </Aux>
        </Aux>
        </Aux>
        
        </Aux>

    )
}
}

export default withRouter(OrderSummary)