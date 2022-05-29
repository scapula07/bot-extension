import React from "react";
//import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import "./main.css"
import LayOut from "./components/layout.jsx"
import NavBar from "./components/navbar.jsx"
const Rent=()=>{
  return(
    <div  className="w-screen h-screen flex justify-center">
       <LayOut>
         
         
       </LayOut>

     

    </div>
  )
 
  

}
const container = document.getElementById('rent-target');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Rent  />);
