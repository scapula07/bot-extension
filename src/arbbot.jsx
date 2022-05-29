import React,{useState} from "react";
//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./main.css"
import LayOut from "./components/layout.jsx";
import NavBar from "./components/navbar.jsx";
import Summary from "./components/summary.jsx";
import Card from "./components/card.jsx";
import Pricing from "./components/pricing.jsx";
import Config from "./components/config.jsx";

const ArbBot =()=>{

  const [state,setState]=useState("summary")
  return(
      <div className="w-screen h-screen flex justify-center">
        <LayOut>
            <NavBar />
             
             <div className="grid grid-cols-3">
                 <span onClick={()=>setState("summary")}>Summary</span>
                 <span onClick={()=>setState("pricing")}>Pricing</span>
                 <span onClick={()=>setState("config")}> config</span>
             </div>
              
              <div>
                { state==="summary"&&
                <Summary>

               <Card cname="rounded shadow w-3/5 ">

                <div className="m-4 mb-6">
                  <span className="text-2xl block">Arbitrage Bot</span>
                      <p className="text-lg">Arbitrage is the simultaneous purchase and sale of the same asset in different markets in order to profit from tiny differences in the asset's listed price. 
                         It exploits short-lived variations in the price of identical or similar tokens n different markets or exchanges.
                         The strategies have been tuned across many coins and exchanges and tested with minimal drawdown as a priority.
                      </p>
                       <span className="block text-xl mt-5">Our bot trades major Dex:</span>
                       <div className="grid grid-rows-2 mt-5 gap-x-0 gap-y-4">
                            <div className="grid grid-cols-3">
                                <button className="rounded-xl border-2 w-32 h-8 p-1">Uniswap</button>
                                <button  className="rounded-xl border-2  w-32 h-8 p-1">Sushiswap</button>
                                <button  className="rounded-xl border-2  w-32 p-1">Quickswap</button>
                            </div>
                            <div className="grid grid-cols-3 ">
                                <button className="rounded-xl border-2 w-32 h-8 p-1">1inchswap</button>
                                <button className="rounded-xl border-2  w-32 h-8 p-1">Panke Swap</button>
                                <button className="rounded-xl border-2  w-32 h-8 p-1">kyber swap</button>
                            </div>
                       </div>
                         <div className="grid grid-rows-2 mt-10 gap-y-4">
                             <div className="grid grid-cols-2">
                                  <span className="block text-lg">Trade/month :</span>
                                  <span className="block text-lg">24</span>
                             </div >
                              <div className="grid grid-cols-2">
                                  <span className="block text-lg">Max Drawdown :</span>
                                  <span className="block text-lg">-44.35</span>
                              </div>
                            
                         </div>

                           </div>
                  </Card>
                  



                </Summary>
                }
                 { state==="pricing"&&
                      <div>
                        <Pricing />
                      </div>

                }
                 { state==="config"&&
                      <div>
                         <Config />
                     </div>

                }
               
              </div>
              
            
        </LayOut>
         
      </div>
  )

}


const container = document.getElementById('arb-target');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ArbBot  />);
