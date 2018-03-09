import React,{Component} from 'react'
import Aux from '../components/Aux'
import Header from '../components/Header.js'
import HomePage from './HomePage.js'



class App extends Component{

    render(){
        return(
            <Aux>
                <Header />
                <HomePage />
            </Aux>


        )
    }

}

export default App