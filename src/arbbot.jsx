import React,{useState} from "react";
//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./main.css"
import LayOut from "./components/layout.jsx";
import NavBar from "./components/navbar.jsx";
import BotSummary from "./components/summary.jsx";
import Card from "./components/card.jsx";


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
                <BotSummary>

                  <Card cname="rounded shadow">
                  <span className="text-2xl block">Arbitrage Bot</span>
                      <p>Arbitrage is the simultaneous purchase and sale of the same asset in different markets in order to profit from tiny differences in the asset's listed price. 
                         It exploits short-lived variations in the price of identical or similar tokens n different markets or exchanges.
                         The strategies have been tuned across many coins and exchanges and tested with minimal drawdown as a prior