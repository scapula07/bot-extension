import React from "react"

const BotSummary=({children, cname})=>{

return(
    <div className={cname}>
        {children}
    </div>
)

}

export default BotSummary