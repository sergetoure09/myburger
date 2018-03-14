import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import FormGroup from '../components/FormGroup'


class OrderForm extends Component{

    state={
        isFormValid:true,

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
                    }
                },
                    validation:{
                        rules:{
                            required:true,
                            maxLength:15
                        }
                    }
                ,

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
                    }
                },
                    validation:{
                        rules:{
                            required:true,
                            maxLength:15
                        }
                    },

                    value:'',
                    isValid:true
                

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
                    }
                },
                    validation:{
                        rules:{
                            required:true,
                            maxLength:15
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
    

    validation=(value,rules)=>{
        let isValid=true

        // if(rules!==undefined && rules.required){
        //     isValid *= value!=='' && value !==null
        // }
        // if(rules!==undefined && rules.required){
        //     isValid *= value!=='' && value !==null
        // }
        if(rules!==undefined){
            for(let key in rules){
                switch(key){
                    case 'required':
                    isValid =isValid && value !=='' && value !==null
                    break;

                    case 'maxLength':
                    isValid =isValid && value.length <= rules.maxLength
                    break;
                }
            }
        }
        return isValid


    }
    


    updateElementValue=(event,el)=>{
        let newFormData={...this.state.formData}
        let element={...newFormData[el]}
        element.value=event.target.type === "radio" ? event.target.id:event.target.value
        if(element.isValid !== undefined ){
        element.isValid=this.validation(element.value,element.validation.rules) 
                                                             }
        newFormData[el]=element
       // newFormData.isFormValid=newFormData.isFormValid && element.isValid

        this.setState({
          
            formData:newFormData
                    
        })

        //console.log(this.state.formData)

        

    }


    submit=(e)=>{
        
        if(!this.state.isFormValid){
        e.preventDefault()
        console.log("form not valid")
        console.log(this.state)
        }else{
            e.preventDefault()
            console.log("form is valid")
            console.log(this.state)
        }

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