import React,{Component} from 'react'
import Burger from './Burger.js'
import Ingredient from './Ingredient.js'

class App extends Component {
        state={
            burger_name:"Giant Burger",
            burger_price:11.99
        }

    render(){
        return(
            <div>
             
    <h1>The {this.state.burger_name}</h1>
    <h2>Only ${this.state.burger_price}</h2>

    
   <Burger>
            <Ingredient type="cheese"/>
            <Ingredient type="tomato"/>
            <Ingredient type="patty"/>
            <Ingredient type="tomato"/>

                   
    </Burger>
     <div className="plate"></div>
    </div>
        )
    }

}


export default App