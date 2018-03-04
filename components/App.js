import React,{Component} from 'react'
import Aux from './Aux.js'
import Header from './Header.js'
import Builder from './Builder.js'

class App extends Component {
        state={
            burger_name:"Giant Burger",
            burger_price:0,
            selected_ingredients:["cheese","tomato","patty","cheese"],
            ingredients_list:[
                                {cheese:2},
                                {tomato:3},
                                {patty:5},
                                {pickle:0.5},
                                {meatball:1},
                                {onion:0.3}
            ]
        }

    updatePrice=()=>{
      
        
    }

    render(){
        
        return(


            <Aux>
            <Header />
            <h1>The {this.state.burger_name}</h1>
            <h2>Only ${this.state.burger_price}</h2>
            <Builder ingredients={this.state.selected_ingredients} />
            <div className="plate"></div>
            </Aux>
        )
    }

}


export default App