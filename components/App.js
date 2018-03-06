import React,{Component} from 'react'
import Aux from './Aux.js'
import Header from './Header.js'
import Builder from './Builder.js'
import Checkout from './Checkout.js'

class App extends Component {
        state={
            burger_name:"Giant Burger",
            burgerPrice:0,
            selected_ingredients:[],
            ingredients_list:
                                {
                                    cheese:4,
                                    tomato:3,
                                    patty:5,
                                    pickle:0.5,
                                    meatball:1,
                                    onion:0.3
                                    
                                }
        
        }
        updatePrice=(el,op)=>{
            let totalPrice=this.state.burgerPrice
            op == 1 ? totalPrice+=this.state.ingredients_list[el]:totalPrice-=this.state.ingredients_list[el]
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


            <Aux>
                <Header />
                <Checkout totalPrice={this.state.burgerPrice}/>
                <Builder ingredients={this.state.selected_ingredients} ingredients_list={this.state.ingredients_list} handleAdd={this.addIngredient} handleRemove={this.removeIngredient} />
            </Aux>
        )
    }

}

export default App