import React, { useEffect, useState } from 'react';
import desktopbg from '../images/crew/background-crew-desktop.jpg';
import mobilebg from '../images/crew/background-crew-mobile.jpg';
import tabletbg from '../images/crew/background-crew-tablet.jpg';
import CrewCard from '../components/CrewCard';

export default function DestinationPage() {
    const [bgImage, setBgImage] = useState(desktopbg);

    useEffect(() => {
        const handleResize = async () => {
            if (window.innerWidth >= 1024) {
                setBgImage(desktopbg);
            } else if (window.innerWidth >= 640) {
                setBgImage(await loadImageAsync(tabletbg)); 
            } else {
                setBgImage(await loadImageAsync(mobilebg)); 
            }
        };

        const loadImageAsync = async (imageSrc) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = imageSrc;
                img.onload = () => resolve(imageSrc);
            });
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div 
            className="noscrlbar bg-cover bg-center h-screen w-full overflow-y-auto overflow-x-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div 
                className="w-[80%] h-[80vh] relative"
                style={{ left: "50%", top: '60%', transform: "translate(-50%, -50%)", zIndex: '1' }}
            > 
                <CrewCard />
            </div>
        </div>
    );
}
