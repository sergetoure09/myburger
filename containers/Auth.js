import React,{Component} from 'react'
import Aux from '../components/Aux'
import FormGroup from '../components/FormGroup'
import axios from '../components/axiosInstance'
import * as actionTypes from '../actions/actionTypes'
import * as actionCreators from '../actions/actionCreators'
import {connect} from 'react-redux'
import Spinner from '../components/Spinner'



class Auth extends Component{
    state={
       
        formObject:{
        isFormValid:false,

        formData:{
            // name:{
            //     tag:"input",
            //     config:{
            //         type:"text",
            //         placeholder:"Full name",
            //         id:"name",
            //         className:"form__input"

            //     },
             

            //     label:{
            //         content:"Full name",
            //         config:{
            //             htmlFor:"name",
            //             className:"form__label"
            //         }
            //     },
            //         validation:{
            //             rules:{
            //                 required:true,
            //                 maxLength:30
            //             }
            //         }
            //     ,
            //         focus:false,
            //     value:'',
            //     isValid:false

                
            // },

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
                            maxLength:30
                        }
                    },
                    focus:false,
                    value:'',
                    isValid:false
                

            },

            password:{
                tag:"input",
                config:{
                   type:"password",
                    placeholder:"Password",
                    id:"password",
                    className:"form__input"

                },
                
                label:{
                    content:"Password",
                    config:{
                        htmlFor:"password",
                        className:"form__label"
                    }
                },
                    validation:{
                        rules:{
                            required:true,
                            maxLength:30,
                            minLength:6
                        }
                    
                },

                    focus:false,
                    value:'',
                    isValid:false
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

                case 'minLength':
                isValid =isValid && value.length >= rules.minLength
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
  let authData={}
     for (var key in newFormObject.formData){
        
        authData[key]=newFormObject.formData[key].value
    
 }

//          order['ingredients']=this.props.location.state.ingredients
//          order['price']=this.props.location.state.price

        if(this.state.formObject.isFormValid){
            console.log(authData)
            this.props.authRegister(authData)
            
//         axios.post('/order.json',order)
//                                         .then(response=>{console.log(response)})
//                                         .catch(error=>{console.log(error)})

//         this.props.history.replace({pathname:this.props.match.url+'/spin'})

         }else{
             console.log('please verify the form')
             
         }

   

}
componentDidMount(){
    console.log(this.props)
 
   
}


render(){
  
    let formData=Object.keys(this.state.formObject.formData).map((el,i)=>
       (<React.Fragment key={i} >
        <FormGroup checkFocus={()=>this.checkFocus(el)} updateValue={(event)=>this.updateElementValue(event,el)} 
                    //element={this.state.formData[el]} 
                    data= {{...this.state.formObject.formData[el]}} />
       </React.Fragment>)

    )
    let {error,loading,userId,token} = this.props.auth
    let formError=undefined
    if(loading){
        formData=<Spinner/>
    }
    if(error){
        formError=error.message
        //this.props.history.replace({pathname:'/auth'})
    }
    return(
        <React.Fragment>
            
                                <div className="Connect">
                                <h1>PLEASE FILL THE FORM TO SIGNUP</h1>
                                </div>
                                <form className="form">
                                
                                    <div className="checkout-form">
                                    <span className="error">{formError}</span>
                                        {formData}
                                        <div className="form-group">
                                        <a href="/" className="u-btn-large order-btn order-btn--confirm" onClick={this.submit}>Sign in</a>
                                        </div>
                                    </div>
                                </form>
            
        
        </React.Fragment>
    )
}
}
const mapStateToProps=state=>{
    return {
       auth:state.auth
}
}
const mapDispathToProps=dispatch=>{
    return {
        authRegister:({name,email,password})=>dispatch(actionCreators.onAuth({name,email,password}))
    }
}


export default connect(mapStateToProps,mapDispathToProps)(Auth)