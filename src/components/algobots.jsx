import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./card.jsx";
const AlgoBots=()=>{

    return(
        <div className="w-3/5">
            <span className="block text-2xl">Algobots Market</span>
            <Carousel className="ml-auto mr-auto" showThumbs={false} showStatus={false} useKeyboardArrows width={"60%"}>
                <Card cname="bg-black h-60 w-full">

                </Card>
                 
                 <Card cname="bg-red-100 h-60 w-full">

                 </Card>
                 <Card cname="bg-orange-500 h-60 w-full">


                 </Card>

            </Carousel>
        </div>
    )


}

export default AlgoBots