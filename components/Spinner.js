import React from 'react'
import withError from './withError'
import axios from 'axios'




const Spinner=props=>{
    return(
        <React.Fragment>
            
           
        <div className="spinner">
        
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>
</React.Fragment>
    )
}

export default withError(Spinner,axios)
//export default Spinner