import React from 'react'
import desktopbg from '../images/crew/background-crew-desktop.jpg'
import mobilebg from '../images/crew/background-crew-mobile.jpg';
import tabletbg from '../images/crew/background-crew-tablet.jpg';
import { useEffect, useState } from 'react';

export default function DestinationPage()
{
    const [bgImage, setBgImage] = useState(desktopbg);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setBgImage(desktopbg);
        } else if (window.innerWidth >= 640) {
          setBgImage(tabletbg); 
        } else {
          setBgImage(mobilebg); 
        }
      };
  
      handleResize(); 
      window.addEventListener('resize', handleResize); 
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <div 
    className="bg-cover bg-center h-screen w-full"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="w-[80%] h-[70vh]  relative "
          style={{left: "50%", top: '50%', transform: "translate(-50%, -50%)", zIndex: '1'}}
    > 
    </div>
  </div>
  )
}