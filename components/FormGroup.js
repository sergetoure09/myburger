import React from 'react'
import RadioGroup from './RadioGroup'


const FormGroup=props=>{
        let formElements=undefined
        let classes=[]
        let newdata={...props.data.config}
        classes.push(newdata.className)
        if(props.data.focus && !props.data.isValid && props.data.value!==''){classes.push('form__input--invalid')}
        newdata.className=classes.join(' ')
        props.data.config=newdata
        switch(props.data.tag){
            case "input":
            formElements=<div className="form-group">
                <input {...props.data.config} value={props.data.value} onFocus={props.checkFocus}  onChange={props.updateValue}/>
                <label {...props.data.label.config}>{props.data.label.content}</label>
                </div>
            return formElements
            break; 

            case "textarea":
            formElements= <div className="form-group">
            <textarea {...props.data.config} value={props.data.value} onFocus={props.checkFocus} onChange={props.updateValue}/>
            <label {...props.data.label.config}>{props.data.label.content}</label>
            </div>
            return formElements
            break;

            case undefined:
            formElements=Object.keys(props.data).map((el,i)=>
                    <React.Fragment key={i}>
                    <RadioGroup data={{...props.data[el]}} updateValue={props.updateValue}/>
                    </React.Fragment>
                
        )

        return formElements


            
            default:
            formElements=<React.Fragment><h1>oops no data</h1></React.Fragment>
            return formElements
        }
   
    return(
        
        
         {formElements}
        


    )
}


export default FormGroup


