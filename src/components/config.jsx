import React,{useState} from "react"
import Card from "./card.jsx"
import Badge from "./badge.jsx"


const Config=()=>{
        const [publicAddress,setpublicAddress]=useState("")
        const [privateAddress,setprivateAddress]=useState("")
    return(
        <div className="w-3/5">
            <Card cname="shadow mt-3">
                <div className="mt-2 ">
                   <Badge cname="bg-slate-300 w-8 h-8">1 </Badge>
                   <span className="text-lg ml-3">Wallet Details</span>
              </div>
             
                 <form className="mt-3 ml-7">

                    <input type="text"
                     name="publicAddress" 
                     value={publicAddress} 
                     onChange={(e)=>setpublicAddress(e.target.value)}
                     className="w-72 border-2 rounded-md block h-8"
                     placeholder="Public address"
                     />
                    <input 
                    type="password" 
                    name="privateAddress"  
                    value={privateAddress}
                    onChange={(e)=>setprivateAddress(e.target.value)}
                    className="w-72 border-2 rounded-md block mt-3 mb-5 h-8"
                    placeholder="Private Key"
                   />
                </form>
                <hr></hr>
                 <div className="mt-3 ">
                 <Badge cname="bg-slate-300 w-8 h-8">2 </Badge>
                 <label for="exchanges" className=" text-lg ml-3">Select exchanges:</label>

                 <select name="exchanges" id="dex1" className="block text-base mb-2 ml-7">
                    <option value="uniswap">Uniswap</option>
                    <option value="sushiswap">Sushiswap</option>
                    <option value="pankeswap">Pankeswap</option>
                   <option value="kyberswap">Kyberswap</option>
                 </select>

                 <select name="exchanges" id="dex2" className="block text-base mb-5 ml-7">
                    <option value="sushiswap">sushiswap</option>
                    <option value="uniswap">uniswap</option>
                    <option value="pankeswap">Pankeswap</option>
                   <option value="kyberswap">Kyberswap</option>
                 </select>

                 <hr></hr>
                 </div>
                
                <div className="mt-3 ">
                <Badge cname="bg-slate-300 w-8 h-8">3 </Badge>
                <label for="token" className=" text-lg ml-3">Select Erc20 token:</label>

                <select name="token" id="erc" className="block text-base mb-5 ml-7">
                  <option value="dai">DAI</option>
                  <option value="link">LINK</option>
                  <option value="shib">SHIB</option>
                  <option value="matic">MATIC</option>
                  <option value="gala">GALA</option>
               </select>

                </div>
                  <button className="rounded-full block my-8 ml-40  text-lg border-2 p-1 w-40 h-10">Save changes</button>

            </Card>
               
          
        </div>
    )

}

export default Config