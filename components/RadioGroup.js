import React from 'react'


const RadioGroup=props=>{
        let formElements=undefined
        switch(props.data.tag){
            case "input":
            formElements=<div className="form-group">
            <div className="radio-group">
        <input {...props.data.config} value={props.data.value} onChange={props.updateValue}/>
        <label {...props.data.label.config}><span className="form__hack"></span><span className="form__label-text">{props.data.label.content}</span></label>
        </div>
        </div>
            return formElements
            break;


            
            default:
            formElements=null
            return formElements
        }
   
    return(
        
        
         {formElements}
        


    )
}


export default RadioGroup