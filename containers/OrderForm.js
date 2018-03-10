import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'


class OrderForm extends Component{
    state={
        
    }


    render(){
        return(
            <React.Fragment>
            <form className="form">

            <div className="checkout-form">
            <div className="form-group">
            <input className="form__input" id="name" type="text" placeholder="Your full name here" />
            <label className="form__label" for="name">Full name</label> 
            </div>

            <div className="form-group">
            <input className="form__input" id="email" type="email" placeholder="Your email here" />
            <label className="form__label" for="email">E-mail</label> 
            </div>

            <div className="form-group">
            <textarea className="form__input" id="address" placeholder="Your address here" />
            <label className="form__label" for="address">Address lines</label> 
            </div>

            <div className="form-group">

            <div className="radio-group">
            <input id="cheapest" className="form__radio" type="radio" name="shipment"/>
            <label for="cheapest" className="form__radio-label"><span className="form__hack"></span><span className="form__label-text">cheapest</span></label>
            </div>

            <div className="radio-group">
            <input id="fastest" className="form__radio" type="radio" name="shipment" checked/>
            <label for="fastest" className="form__radio-label"><span className="form__hack"></span><span className="form__label-text">fastest</span></label>
            </div>

            </div>

            <div className="form-group">
            <a href="/" className="u-btn-large order-btn order-btn--confirm ">Order Now!</a>
            </div>

            </div>
            </form>
            </React.Fragment>
        )
    }
}
export default withRouter(OrderForm)