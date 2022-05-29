import React from "react"
import Card from "./card.jsx"
import {RiPriceTag3Line} from "react-icons/ri"
const Pricing=()=>{

    return(
        <div>
            <div>
            <span className="block text-2xl mt-10"> Pricing</span>
              <div>
                 <span className="block text-xl mt-10">Rent our bot</span>
                 <Card cname="shadow border-2 rounded-md w-2/4 h-32">
                     <main className="ml-40"><RiPriceTag3Line className="inline"/> <span className="">Small plan</span></main>
                     <div className="grid grid-cols-3">
                         <main className="mt-5">
                             <span className="block text-center text-lg">#3000</span>
                             <span className="block text-center text-lg">Monthly</span>

                         </main>
                         <main className="border-l-2 mt-5" >
                             <span className="block text-center text-lg">#30000</span>
                             <span className="block text-center text-lg">Yearly</span>
                        </main>
                        <main className="border-l-2 mt-5">
                             <span className="block text-center text-lg">24 Trades</span>
                             <span className="block text-center text-lg"></span>
                      </main>
                     </div>
                 </Card>
                 <Card cname="shadow border-2 rounded-md w-2/4 h-32 mt-5">
                     <main className="ml-40"><RiPriceTag3Line className="inline"/> <span className="">Small plan</span></main>
                     <div className="grid grid-cols-3">
                         <main className="mt-5">
                             <span className="block text-center text-lg">#5000</span>
                             <span className="block text-center text-lg">Monthly</span>

                         </main>
                         <main className="border-l-2 mt-5" >
                             <span className="block text-center text-lg">#50000</span>
                             <span className="block text-center text-lg">Yearly</span>
                        </main>
                        <main className="border-l-2 mt-5">
                             <span className="block text-center text-lg">48 Trades</span>
                             <span className="block text-center text-lg"></span>
                      </main>
                     </div>
                 </Card>
                 <Card cname="shadow border-2 rounded-md w-2/4 h-32 mt-5 mb-5">
                     <main className="ml-40"><RiPriceTag3Line className="inline"/> <span className="">Small plan</span></main>
                     <div className="grid grid-cols-3">
                         <main className="mt-5">
                             <span className="block text-center text-lg">#10000</span>
                             <span className="block text-center text-lg">Monthly</span>

                         </main>
                         <main className="border-l-2 mt-5" >
                             <span className="block text-center text-lg">#100000</span>
                             <span className="block text-center text-lg">Yearly</span>
                        </main>
                        <main className="border-l-2 mt-5">
                             <span className="block text-center text-lg">96 Trades</span>
                             <span className="block text-center text-lg"></span>
                      </main>
                     </div>
                 </Card>
              </div>
           

            </div>
            

        </div>
    )
}

export default Pricing