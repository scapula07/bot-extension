import React,{useState} from "react"
import Card from "./card.jsx"


const Trades=()=>{
    const [profit,setProfit]=useState("0")
    const tokenName="DAI"
   return(
       <>
       <main>
           <span className="block text-base">Total Profit</span>
           <span className="block ml-4 text-lg mt-3"> {profit}<span className="inline ml-1">{tokenName}</span></span>
       </main>
       <Card cname="shadow rounded-lg border-2 grid grid-cols-5 w-10/12 mt-5  h-52 p-3 "> 
           <span >Bot</span>
           <span>Pair</span>
           <span >Date</span>
           <span>Amount</span>
           <span>profit%</span>
          
       </Card>

       </>
   )
}

export default Trades;