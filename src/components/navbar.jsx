import React from "react";
import {FiSearch} from "react-icons/fi"
import {FaRegUser} from "react-icons/fa" 
import {GoKebabVertical} from "react-icons/go"
const NavBar=()=>{

   return(
       <div>
          <div className="grid grid-cols-4 gap-8">
              <h1 className="inline text-2xl">Annette</h1>
              <div className="col-span-3 grid grid-cols-3 gap-8">
                < FiSearch className="text-xl inline " />
                <FaRegUser className="text-xl inline" /> 
                <GoKebabVertical className="text-xl inline"/>

              </div>
          </div>

       </div>
   )

}

export default NavBar