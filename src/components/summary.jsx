import React from "react"

const Summary=({children, cname})=>{

return(
    <div className={cname}>
        {children}
    </div>
)

}

export default Summary