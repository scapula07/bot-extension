import React from "react"
import Card from "./card.jsx"
const Badge=({children,cname})=>{

   return(
       <Card cname={`inline-block rounded-full p-1 border-3  text-center text-base ${cname}`}>
           {children}
       </Card>
   )
}

export default Badge