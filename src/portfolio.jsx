import React,{useState} from "react";
//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./main.css"
import LayOut from "./components/layout.jsx";
import NavBar from "./components/navbar.jsx";
import Summary from "./components/summary.jsx";
import Card from "./components/card.jsx";
import DropDown from "./components/dropdown.jsx";
import {RiWalletLine} from "react-icons/ri"
import TokenChart from "./components/tokenchart.jsx"
import BotHistroy from "./components/bothistory.jsx"
import Trades from "./components/trades.jsx"
 

const Portfolio=()=>{
    const [state,setState]=useState("summary")
    const [token,setToken]=useState({ balance:0,
                                      symbol:"DAI" })
   
    console.log(token.symbol)
    return(
        <div className="w-screen h-screen flex justify-center">
        <LayOut >
           <NavBar />
           <div className="grid grid-cols-3">
                 <span onClick={()=>setState("summary")}>Summary</span>
                 <span onClick={()=>setState("trades")}>My Trades</span>
                 <span onClick={()=>setState("active")}> Active bots</span>
            </div>
            
            <div>
                { state==="summary"&&
                <Summary>
                    <main>
                        <span className="block text-lg ml-5 mt-7 ">{token.balance}<span className="ml-1 text-lg">{token.symbol}</span></span>
                        <span className="block text-base"> Total net balance</span>
                    </main>
                    
                    <DropDown  
                    cname="mt-10 border-2 shadow w-2/4 rounded-lg" 
                    title="My Wallet" 
                    icon={<RiWalletLine className="inline text-2xl ml-5"/>} 
                    items={items}
                    />

                    <Card cname="mt-5 w-2/4 h-52 border-2 shadow rounded-lg ">
                       <span className="block text-lg text-center">Portfolio charts</span>  
                        <TokenChart />   
                    </Card>
                  



                </Summary>
                }
                 { state==="trades"&&
                      <div className="mt-10">
                        <Trades />
                      </div>

                }
                 { state==="active"&&
                      <div>
                       active 
                     </div>

                }
               
              </div>
        </LayOut>
    </div>
    )
  

}
const container = document.getElementById('portfolio-target');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Portfolio  />);

export const items=[
    {
        tag:"Balance"
    },
    {
        tag:"Recharge"
    },
    {
        tag:"Withdraw"
    }

]