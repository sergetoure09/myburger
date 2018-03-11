import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import FormGroup from '../components/FormGroup'


class OrderForm extends Component{

    state={
        formData:[
            {
                tag:"input",
                config:{
                    type:"text",
                    id:"name",
                    placeholder:"Full name",
                    className:"form__input"
                        },
                validation:{
                    rules:{
                        required:true,
                        maxLength:30
                    }
                },
                label:{
                    config:{
                        htmlFor:"name",
                        className:"form__label"
                    },
                    content:"Full name"
                },
                value:null,
                isValid:true
              
            },
                
            
            {
                tag:"input",
                config:{
                    type:"email",
                    id:"email",
                    placeholder:"E-mail",
                    className:"form__input"
                        },
                validation:{
                    rules:{
                        required:true,
                        maxLength:30
                    }
                },
                label:{
                    config:{
                        htmlFor:"email",
                        className:"form__label"
                    },
                    content:"E-mail"
                },
                value:null,
                isValid:true

            
        },

        { 
        tag:"textarea",
                config:{
                    
                    id:"address",
                    placeholder:"Address lines",
                    className:"form__input"
                        },
                validation:{
                    rules:{
                        required:true,
                        maxLength:30
                    }
                },
                label:{
                    config:{
                        htmlFor:"address",
                        className:"form__label"
                    },
                    content:"Adress lines"
                },
                value:null,
                isValid:true

            
        },
        {    
        tag:"input",
                config:{
                    type:"radio",
                    id:"cheapest",
                    name:"shipment",
                    //placeholder:"Full name",
                    className:"form__radio"
                        },
                validation:{
                    rules:{
                        required:true,
                        maxLength:30
                    }
                },
                label:{
                    config:{
                        htmlFor:"cheapest",
                        className:"form__radio-label"
                    },
                    content:"cheapest"
                },
                value:null,
                isValid:true

            
        },
        {
            tag:"input",
                config:{
                    type:"radio",
                    id:"fastest",
                    name:"shipment",
                    //placeholder:"Full name",
                    className:"form__radio"
                        },
                validation:{
                    rules:{
                        required:true,
                        maxLength:30
                    }
                },
                label:{
                    config:{
                        htmlFor:"fastest",
                        className:"form__radio-label"
                    },
                    content:"fastest"
                },
                value:null,
                isValid:true
                

            
        }
           
            
        ]
    }
        
    componentDidMount(){
        console.log(this.props)
        console.log( Object.keys(this.state.formData))
    }


    render(){
      
        let formData=this.state.formData.map((el,i)=>
            (<React.Fragment key={i}>
            <FormGroup element={el.tag} data= {{...el}} />
            </React.Fragment>)

        )
        return(
            <React.Fragment>
            <form className="form">
                <div className="checkout-form">
                    {formData}
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