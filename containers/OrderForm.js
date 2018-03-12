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
                value:'',
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
                value:'',
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
                value:'',
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
                value:'',
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
                value:'',
                isValid:true
                

            
        }
           
            
        ],
        form_is_Valid:true
    }


    updateElementValue=(event,i)=>{
        let newFormData=[...this.state.formData]
        let element={...newFormData[i]}
        element.value=event.target.value
        newFormData[i]=element


        this.setState({
            formData:newFormData

        })

        console.log(this.state.formData)

        

    }
    componentDidMount(){
        console.log(this.props)
       
    }


    render(){
      
        let formData=this.state.formData.map((el,i)=>
           
            <FormGroup updateValue={(event)=>this.updateElementValue(event,i)} key={i} element={el.tag} data= {{...el}} />
           

        )
        return(
            <React.Fragment>
            <form className="form">
                <div className="checkout-form">
                    {formData}
                    <div className="form-group">
                    <a href="/" className="u-btn-large order-btn order-btn--confirm">Order Now!</a>
                    </div>
                </div>
            </form>
            </React.Fragment>
        )
    }
}
export default withRouter(OrderForm)