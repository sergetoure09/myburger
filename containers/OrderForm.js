import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import FormGroup from '../components/FormGroup'
//import Spinner from '../components/Spinner';
import {instance} from '../components/axiosInstance'
import withError from '../components/withError'
import {connect} from 'react-redux'



class OrderForm extends Component{

    state={
       
        formObject:{
        isFormValid:false,

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
                    focus:false,
                value:'',
                isValid:false

                
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
                    focus:false,
                    value:'',
                    isValid:false
                

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

                    focus:false,
                    value:'',
                    isValid:false
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
                    
                    value:'cheapest'
            }
        
        }
    }
}
    
    checkFocus=(el)=>{
        let newFormObject={...this.state.formObject}
        let element={...newFormObject.formData[el]}
        element.focus=true
        newFormObject.formData[el]=element

        this.setState({
            formObject:newFormObject

        })

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

                    default:
                    break;
                }
            }
        }
        return isValid


    }
    


    updateElementValue=(event,el)=>{
        let newFormObject={...this.state.formObject}
        let element={...newFormObject.formData[el]}
        element.value=event.target.type === "radio" ? event.target.id:event.target.value
        if(element.isValid !== undefined ){
        element.isValid= this.validation(element.value,element.validation.rules)                                      }
        newFormObject.formData[el]=element
       // newFormData.isFormValid=newFormData.isFormValid && element.isValid


       let valObj={}
       for (var key in newFormObject.formData){
           if(newFormObject.formData[key].isValid!==undefined){
           valObj[key]=newFormObject.formData[key].isValid
       }
   }
        
      let formIsValid=Object.values(valObj).reduce((acc,el)=>acc && el)
      newFormObject.isFormValid=formIsValid

        this.setState({
           
            formObject:newFormObject
                    
        })

        //console.log(this.state.formData)

        

    }


    submit=(e)=>{
        e.preventDefault()
        let newFormObject={...this.state.formObject}
        let order={}
        for (var key in newFormObject.formData){
            
            order[key]=newFormObject.formData[key].value
        
    }

             order['ingredients']=this.props.location.state.ingredients
             order['price']=this.props.location.state.price
            order['uid']=this.props.uid

             if(this.state.formObject.isFormValid){
                 console.log(order.uid)
                
            instance.post('/order.json?auth='+this.props.token,order)
                                            .then(response=>{console.log(response)})
                                            .catch(error=>{console.log(error)})

            this.props.history.replace({pathname:this.props.match.url+'/spin'})

             }else{
                 console.log('please verify the form')
                 
             }

       

    }
    componentDidMount(){
       // console.log(this.props)
     
       
    }


    render(){
      
        let formData=Object.keys(this.state.formObject.formData).map((el,i)=>
           (<React.Fragment key={i} >
            <FormGroup checkFocus={()=>this.checkFocus(el)} updateValue={(event)=>this.updateElementValue(event,el)} 
                        //element={this.state.formData[el]} 
                        data= {{...this.state.formObject.formData[el]}} />
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

const mapStateToProps=state=>{
    return {
        uid:state.auth.userId,
        token:state.auth.token
    }
}
export default connect(mapStateToProps)(withRouter(OrderForm))
