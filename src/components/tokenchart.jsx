import React,{useEffect,useState} from "react"
import {} from "victory"
import axios from "axios"
import Card from "./card.jsx"


const TokenChart =()=>{
      const token="dai"
      const [tokenData,setToken]=useState({})
      useEffect(()=>{
        
        const fetchData=async ()=>{
            const res= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=truehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true")
            const index = res.data.findIndex(result => result.symbol === token);
                setToken(res.data[index])   

        }

        fetchData()

     },[])
    
     const {symbol,price,sparkline_in_7d}=tokenData
     console.log(sparkline_in_7d)
    return(
        <>
          <Card cname="h-full">
         


          </Card>
        
        </>
    )
}

export default TokenChart