import React,{Component} from 'react'
import Aux from './Aux.js'
import Header from './Header.js'
import Builder from './Builder.js'
import Checkout from './Checkout.js'
import Backdrop from './Backdrop.js'
import OrderSummary from './OrderSummary.js'

class App extends Component {
        state={
            burger_name:"Giant Burger",
            burgerPrice:0,
            selected_ingredients:[],
            ingredients_list:
                                {
                                    cheese:{up:4,icon:"./img/009-tortillas.svg"},
                                    tomato:{up:2,icon:"./img/014-tomato.svg"},
                                    patty:{up:5,icon:"./img/006-steak.svg"},
                                    pickle:{up:1,icon:"./img/008-pickle.svg"},
                                    meatball:{up:0.5,icon:"./img/003-meatball.svg"},
                                    onion:{up:0.5,icon:"./img/002-onion.svg"},
                                    // klaklo:{up:0.5,icon:"./img/018-hamburger.svg"}
                                    
                                }
        
        }
        updatePrice=(el,op)=>{
            let totalPrice=this.state.burgerPrice
            op == 1 ? totalPrice+=this.state.ingredients_list[el].up:totalPrice-=this.state.ingredients_list[el].up
            totalPrice < 0 ? totalPrice=0 : totalPrice=totalPrice
            this.setState({
                burgerPrice:Number.parseFloat(totalPrice.toFixed(1))
            })    
        }

    addIngredient=(el)=>{

        let new_ingredients=[...this.state.selected_ingredients]
        new_ingredients.push(el)
        this.setState({
            selected_ingredients:new_ingredients
        })

        this.updatePrice(el,1)
    }

    removeIngredient=(el)=>{
        let new_ingredients=[...this.state.selected_ingredients]
       
       if( new_ingredients.indexOf(el) !=-1) {
                         new_ingredients.splice(new_ingredients.indexOf(el),1)
        this.setState({
            selected_ingredients:new_ingredients
        })
        this.updatePrice(el,0)
        
    }
}

   
    componentDidMount=()=>{
        //this.updatePrice()
    }

    render(){
        
        return(


            <Aux id="main">

                <Backdrop>
                    <OrderSummary 
                                ingredients={this.state.selected_ingredients} 
                                totalPrice={this.state.burgerPrice} 
                                burger_name={this.state.burger_name} 
                                ingredients_list={this.state.ingredients_list} 
                    />
                </Backdrop>
                
                <Header />
                
                <Checkout totalPrice={this.state.burgerPrice}/>
                
                <Builder 
                        ingredients={this.state.selected_ingredients} 
                        ingredients_list={this.state.ingredients_list} 
                        handleAdd={this.addIngredient} 
                        handleRemove={this.removeIngredient} 
                />

            </Aux>
        )
    }

}

export default App