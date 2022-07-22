import React from "react";
import NavBar from "./navbar.jsx"
import Card from "./card.jsx"
import { FaWindows } from "react-icons/fa";
import botsImage from "../images/bots.jpeg"
import "../styles/home.css"

const Header =()=>{
    const balance=0
    const name="Barth"
  return(
      <div className=" side-bottom-radius h-96">
         <NavBar />

          
           <div className=" w-full" >
               <img src={botsImage} className="w-full h-80 relative  -top-20 side-bottom-radius
               " />
          </div>
          <section className="flex flex-row relative items-center -top-80 w-full justify-between">

            <div className=" flex flex-col w-1/2  pl-12 space-y-6">
                <h1 className="text-white text-2xl font-bold">Welcome {name}</h1>
                <div className="flex flex-row space-x-2">
                   <button className="bg-slate-800 text-white rounded-lg px-2 py-1 font-medium hover:bg-slate-400">Deposit ESEH</button>
                   <button className="border border-white  rounded-lg px-2 py-1 text-white font-medium hover:bg-white hover:text-blue-600">Buy ESEH</button>
                 </div>
           </div>

           <div className="flex flex-col w-1/2 items-end pt-3 ">
               
               <h1 className="flex flex-col justify-center items-center w-full text-lg font-semibold text-white">$0.006
               
                <span className="text-slate-600">ESEH Price</span>
               </h1>

               <h1 className="flex flex-col justify-center items-center w-full text-lg font-semibold text-white">4
                <span className="text-slate-600">Bots Available</span>
               </h1>
                
           </div>
           </section>

           <section className="flex flex-row justify-center items-center space-x-6 relative -top-64  h-24 w-full px-3">
              <div className="bg-black rounded-lg w-2/6 h-full">

              </div>
              <div className="bg-black rounded-lg w-3/5 h-full">
                
              </div>

           </section>
        </div>

           
  )
}

export default Header