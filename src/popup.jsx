import React from "react";
//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./main.css"
import LayOut from "./components/layout.jsx"
import Card from "./components/card.jsx";
import TokenList from "./components/tokenlist.jsx";
import 'regenerator-runtime/runtime'
import Header from "./components/header.jsx";
import algoRentalSvg from "./images/algo-rental.svg"
import bridgeSvg from "./images/bridge.svg"
import tradeSvg from "./images/trade.svg"
import stakingSvg from "./images/staking.svg"
const Popup =()=>{
     const balance="0.00"
    return(
    
        <div className="w-screen h-screen flex justify-center ">
            <LayOut>
                 <Header />
                 <div className="w-full flex justify-center">
                    <Card cname="flex flex-col justify-center items-center bg-blue-300 w-11/12 py-4 rounded-lg shadow space-y-2">
                    
                       <h1 className="text-sm font-medium text-white">Total Balance: <span className="text-base">{balance} ETH</span></h1>
                       <button className="bg-white rounded-full px-3 text-blue-900 shadow text-sm font-normal hover:bg-slate-400 hover:text-white">View</button>
                 </Card>
                 </div>
                  <div className="flex flex-col justify-center items-center mt-4">
                    <h1 className="pl-11 text-lg font-medium mb-4">Apps</h1>
                 <div className="flex flex-row justify-center space-x-4 items-center w-11/12">
                    
                    {
                        apps.map((app)=>{
                             const {imgUrl,title}=app
                            return(
                                <Card cname="flex flex-col items-center bg-slate-800 space-y-3 w-1/5 rounded-lg shadow h-44 py-9 ">
                                    <img src={imgUrl} className="w-4/6"/>
                                    <h1 className="text-white text-lg font-light">{title}</h1>
                                </Card>

                            )
                        })
                    }

                 </div>
                 </div>
                  <div className="flex justify-center">
                    <TokenList />
                  </div>
         
            </LayOut>
        </div>
    )
}

export const apps=[{
    imgUrl:algoRentalSvg,
    title:"Algo Rental"
},
  {
    imgUrl:tradeSvg  ,
    title:"Trade"
  },
  {
    imgUrl:bridgeSvg,
    title:"Bridge"
  },
 
  {
    imgUrl:stakingSvg ,
    title:"Staking"

  }
]

const container = document.getElementById('react-target');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Popup  />);


