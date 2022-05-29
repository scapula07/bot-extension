import React, {useState} from "react"
import {RiArrowDropDownLine} from "react-icons/ri"
import {RiArrowUpSLine} from "react-icons/ri"
import Modal from "./modal.jsx";
import { IconContext } from "react-icons";




const DropDown =(props)=>{
    const {title,items,icon,cname} =props
    const [dropdown,setDropdown] =useState(false)
     
  const handleClick= (event) =>{
    setDropdown(true)
  
}  
const resetTrigger=(event) =>{
setDropdown(false)
}

    return(
        <div className={cname}>
          <h6> 
             
           <span className="p-1">  {icon} <span className="text-base inline ml-1">{title}</span>  {dropdown ?
           <IconContext.Provider value={{className:"inline text-xl ml-44"}}>
              < RiArrowUpSLine 
              onClick ={resetTrigger} 
             />
               </IconContext.Provider>
             : 
             <IconContext.Provider value={{className:"inline text-xl ml-44"}}>
               <RiArrowDropDownLine 
                  onClick={handleClick}
                />
             </IconContext.Provider>
            
             } </span>
         
           </h6> 
          
            
            <Modal trigger={dropdown}>
                  
               {
               
                items.map(item=>{
                     const {tag,link,icon} =item
                  return(
                    <ol>
                  
                      
                      <a to={`/${link}`} className=" no-underline">
                        {icon} <li className="my-4 ml-5 inline text-base">{tag}</li>
                     </a>
                    
                      
                     
                   </ol> 
                  )
                }
                  
                   
                    )
                }
           </Modal>
                
           
           <div>



           </div>
        </div>


    )



}


export default DropDown