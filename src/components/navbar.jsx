import React from "react";
import {FiSearch} from "react-icons/fi"
import {FaRegUser,FaWallet} from "react-icons/fa" 
import {GoKebabVertical} from "react-icons/go"
import Badge from "./badge.jsx"
import {BsWallet2} from "react-icons/bs"
const NavBar=()=>{

   return(
       <div className="relative z-10 px-4 py-5">
          <div className="flex flex-row items-center w-full justify-between">
              <h1 className="inline text-lg font-medium w-1/4 text-white">Annette</h1>
              <div className="flex flex-row w-3/4 px-3  items-center space-x-4 justify-end">
                <Badge cname="bg-blue-400 p-2 hover:bg-blue-200">< FiSearch className="text-white " /></Badge> 
                <Badge  cname="bg-blue-400 p-2 hover:bg-blue-200"> <FaRegUser className=" text-white" /></Badge>
                <Badge  cname="bg-blue-400 p-2 hover:bg-blue-200"> <BsWallet2  className=" text-white" />  </Badge>
                 <GoKebabVertical className="text-sm text-white"/>
               
              </div>
          </div>

       </div>
   )

}

export default NavBar