import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './card.jsx';
const Banner=() =>{
    const items=algobots.map(()=>{
        return(
            <Card>
                <img />
                <h1>{title}</h1>
            </Card>

        )
    })
  return (
    <div className=''>
       <AliceCarousel
       />
    </div>
  )
}
export const algobots=[
    {
    imgUrl:"",
    title:"Arbitrage Bot"
},
{
    imgUrl:"",
    title:"Sniping Bot"
},
{
    imgUrl:"",
    title:"DCA Bot"
},
{
    imgUrl:"",
    title:"Indicator Bot"
},
{
    imgUrl:"",
    title:"Front-runner Bot"
},
]
export default  Banner
