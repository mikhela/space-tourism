import React, { useEffect, useState } from 'react';
import desktopbg from '../images/technology/background-technology-desktop.jpg';
import mobilebg from '../images/technology/background-technology-mobile.jpg';
import tabletbg from '../images/technology/background-technology-tablet.jpg';
import TechnologyCard from '../components/TechnologyCard';

export default function TechnologyPage() {
    const [bgImage, setBgImage] = useState(desktopbg);

    useEffect(() => {
        const handleResize = () => {
            let newBgImage;

            if (window.innerWidth >= 1024) {
                newBgImage = desktopbg;
            } else if (window.innerWidth >= 640) {
                newBgImage = tabletbg;
            } else {
                newBgImage = mobilebg;
            }

            setBgImage((prevImage) => {
                return prevImage !== newBgImage ? newBgImage : prevImage;
            });
        };

        const debounce = (func, wait) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        };

        const debouncedHandleResize = debounce(handleResize, 200);

        handleResize();
        window.addEventListener('resize', debouncedHandleResize);

        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, []);

    return (
        <div 
            className="bg-cover bg-center h-screen w-full"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div 
                className="noscrlbar w-[100%] h-[100vh] md:h-[75vh] relative overflow-y-auto overflow-x-hidden"
                style={{ left: "50%", top: '60%', transform: "translate(-50%, -50%)", zIndex: '1' }}
            > 
                <TechnologyCard />
            </div>
        </div>
    );
}
