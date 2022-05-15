import React from "react";
//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./main.css"
import LayOut from "./components/layout.jsx"
import Card from "./components/card.jsx";
import TokenList from "./components/tokenlist.jsx";
import 'regenerator-runtime/runtime'
import Header from "./components/header.jsx";
import AlgoBots from "./components/algobots.jsx"
const Popup =()=>{

    return(
    
        <div className="w-screen h-screen flex justify-center ">
            <LayOut>
                 <Header />
                 <AlgoBots />
            
             <Card> 

                  <TokenList />
              </Card>

            </LayOut>
        </div>
    )
}

const container = document.getElementById('react-target');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Popup  />);


