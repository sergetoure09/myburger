import React from 'react'


const RadioGroup=props=>{
        let formElements=undefined
        switch(props.data.tag){
            case "input":
            formElements=<div className="form-group">
                <input {...props.data.config} value={props.data.value}  onChange={props.updateValue}/>
                <label {...props.data.label.config}>{props.data.label.content}</label>
                </div>
            return formElements
            break; 

            case "textarea":
            formElements= <div className="form-group">
            <textarea {...props.data.config} value={props.data.value}  onChange={props.updateValue}/>
            <label {...props.data.label.config}>{props.data.label.content}</label>
            </div>
            return formElements
            break;

            case undefined:
            Object.keys(prop.data).map((el,i)=>
                    <React.Fragment key={i}>
                    <RadioGroup data={{...props.data[el]}}/>
                    </React.Fragment>
                
        )


            
            default:
            formElements=<React.Fragment><h1>oops no data</h1></React.Fragment>
            return formElements
        }
   
    return(
        
        
         {formElements}
        


    )
}


export default FormGroup