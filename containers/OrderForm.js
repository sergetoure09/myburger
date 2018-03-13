import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import FormGroup from '../components/FormGroup'


class OrderForm extends Component{

    state={

        formData:{
            name:{
                tag:"input",
                config:{
                    type:"text",
                    placeholder:"Full name",
                    id:"name",
                    className:"form__input"

                },
             

                label:{
                    content:"Full name",
                    config:{
                        htmlFor:"name",
                        className:"form__label"
                    },
                    validation:{
                        rules:{
                            required:true,
                            maxLength:30
                        }
                    }
                },

                    value:'',
                    isValid:true

                
            },

            email:{
                tag:"input",
                config:{
                    type:"email",
                    placeholder:"Email",
                    id:"email",
                    className:"form__input"

                },

                label:{
                    content:"Email",
                    config:{
                        htmlFor:"email",
                        className:"form__label"
                    },
                    validation:{
                        rules:{
                            required:true,
                            maxLength:30
                        }
                    },

                    value:'',
                    isValid:true
                }

            },

            address:{
                tag:"textarea",
                config:{
                   
                    placeholder:"Address",
                    id:"address",
                    className:"form__input"

                },
                
                label:{
                    content:"Address",
                    config:{
                        htmlFor:"address",
                        className:"form__label"
                    },
                    validation:{
                        rules:{
                            required:true,
                            maxLength:30
                        }
                    }
                },

                    value:'',
                    isValid:true
            },

            method:{
                
                cheapest:{
                tag:"input",
                config:{
                    type:"radio",
                    name:"shipment",
                    id:"cheapest",
                    value:"cheapest",
                    className:"form__radio",
                    defaultChecked:true

                },
             

                label:{
                    content:"cheapest",
                    config:{
                        htmlFor:"cheapest",
                        className:"form__radio-label"
                    }
                }
                },

                fastest:{
                    tag:"input",
                    config:{
                        type:"radio",
                        name:"shipment",
                        value:"fastest",
                        id:"fastest",
                        className:"form__radio",
                        //checked:false
    
                    },
                 
    
                    label:{
                        content:"fastest",
                        config:{
                            htmlFor:"fastest",
                            className:"form__radio-label"
                        }
                    }
                    },
                    
                    value:''
            }
        
        }
    }
                
        
    


    updateElementValue=(event,el)=>{
        let newFormData={...this.state.formData}
        let element={...newFormData[el]}
        element.value=event.target.type==="radio" ? event.target.id:event.target.value
        newFormData[el]=element


        this.setState({
            formData:newFormData

        })

        console.log(this.state.formData)

        

    }


    submit=(e)=>{
        e.preventDefault()
        console.log(this.state.formData)

    }
    componentDidMount(){
        console.log(this.props)
       
    }


    render(){
      
        let formData=Object.keys(this.state.formData).map((el,i)=>
           (<React.Fragment key={i} >
            <FormGroup updateValue={(event)=>this.updateElementValue(event,el)} 
                        //element={this.state.formData[el]} 
                        data= {{...this.state.formData[el]}} />
           </React.Fragment>)

        )
        return(
            <React.Fragment>
            <form className="form">
                <div className="checkout-form">
                    {formData}
                    <div className="form-group">
                    <a href="/" className="u-btn-large order-btn order-btn--confirm" onClick={this.submit}>Order Now!</a>
                    </div>
                </div>
            </form>
            </React.Fragment>
        )
    }
}
export default withRouter(OrderForm)