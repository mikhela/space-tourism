import React from 'react'
import desktopbg from '../images/destination/background-destination-desktop.jpg'
import DestinationCard from '../components/DestinationCard';
export default function DestinationPage()
{
  return (
    <div 
    className="destinationpagefullcontainer bg-center bg-no-repeat bg-cover h-screen w-full absolute top-0 overflow-y-auto overflow-x-hidden"
    style={{ backgroundImage: `url(${desktopbg})` }}
    >
    <div className="w-[80%] h-[70vh]  relative top-[45%] md:top-[60%]"
          style={{left: "50%", transform: "translate(-50%, -50%)", zIndex: '1'}}
    > 
  <DestinationCard />
    </div>
  </div>
  )
}