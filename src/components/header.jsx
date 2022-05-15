import React from "react";
import NavBar from "./navbar.jsx"
import Card from "./card.jsx"
import { FaWindows } from "react-icons/fa";
import android from "../images/android.jpg"

const Header =()=>{
    const balance=0
  return(
      <div>
         <NavBar />

        
           <div className=" mt-10 grid grid-cols-2">
           <Card cname="mt-20">
             <span className="block text-4xl">${balance}</span>
             <span className="block text-xl mt-4">Total balance</span>
             <button className="block rounded-2xl border-2 text-xl p-2 mt-2"> View</button>
           </Card>

           <Card >
              <img src={android} className="h-60 w-9/12 rounded-lg"/>
             
           </Card>
           </div>
             


      </div>
  )
}

export default Header