import React from "react"

const Modal=({children,trigger,cname})=>{
       console.log(trigger)
    return(
        (trigger)?(
            <div className={cname} >
            {children}

           </div>

        ) :""

          
        
      
    )

}

export default Modal