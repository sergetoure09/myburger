import React from 'react'


const FormGroup=props=>{
        let formElements=null
        switch(props.element){
            case "input":
            if(props.data.config.type !="radio"){
            formElements=<div className="form-group">
                <input {...props.data.config}/>
                <label {...props.data.label.config}>{props.data.label.content}</label>
                </div>
            return formElements
            break;
            }
            else if(props.data.config.type == "radio"){
                formElements=<div className="form-group">
                    <div className="radio-group">
                <input {...props.data.config} />
                <label {...props.data.label.config}><span className="form__hack"></span><span className="form__label-text">{props.data.label.content}</span></label>
                </div>
                </div>
                return formElements
                break;
            }    

            case "textarea":
            formElements= <div className="form-group">
            <textarea {...props.data.config}/>
            <label {...props.data.label.config}>{props.data.label.content}</label>
            
            </div>
            return formElements
            break;
            
            default:
            formElements=<React.Fragment><h1>oops no data</h1></React.Fragment>
            return formElements
        }
   
    return(
        
        
         {formElements}
        


    )
}


export default FormGroup