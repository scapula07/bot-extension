import React from "react"
import {useEffect,useState} from "react"
import axios from "axios"
import Card from "./Card.jsx"
const TokenList=()=>{
    
    const [tokenData,settokenData]=useState([])

     useEffect(()=>{
        
        const fetchData=async ()=>{
            const res= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true")
            settokenData(res.data)
        }

        fetchData()

     },[])

     console.log(tokenData)
     
    return(
        <div className="mt-10 ">
               
               <Card className="grid grid-rows-5 ">
  
                <div className="grid grid-cols-3">
                     <span>Pair</span>
                   <span>Price</span>
                   <span>24h chg%</span>
               </div>
              
            {
             tokenData.map((token)=>{
                 const {image,symbol,current_price,price_change_percentage_24h}=token
                 return(
                   <div className="grid grid-cols-3 mt-5" >
                       <span>
                           <img src={image} className="inline h-8 " />
                          <span className="ml-3">{symbol.toUpperCase()}/USDT</span> 
                       </span>
                       
                       <span>${current_price}</span>
                       <span>{price_change_percentage_24h}%</span>
                   </div>
                 )

             })

            }

         </Card>
        </div>

    )
}


export default TokenList