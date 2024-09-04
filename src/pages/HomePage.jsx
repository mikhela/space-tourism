import React, { useEffect, useState } from "react";
import desktopbg from '../images/home/background-home-desktop.jpg';
import mobilebg from '../images/home/background-home-mobile.jpg';
import tabletbg from '../images/home/background-home-tablet.jpg';
import HomeContent from '../components/HomeContent';

export default function Home() {
    const [bgImage, setBgImage] = useState(desktopbg);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        const handleResize = async () => {
            let newImage;
            if (window.innerWidth >= 1024) {
                newImage = desktopbg;
            } else if (window.innerWidth >= 640) {
                newImage = tabletbg;
            } else {
                newImage = mobilebg;
            }
            
            try {
                await loadImageAsync(newImage);
                setBgImage(newImage);
            } catch (error) {
                console.error("Failed to load image:", error);
                setImageError(true); 
            }
        };

        const loadImageAsync = (imageSrc) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = imageSrc;
                img.onload = () => resolve(imageSrc);
                img.onerror = (e) => reject(e);
            });
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div 
            className="bg-cover bg-center h-screen w-full transition-all duration-500"
            style={{ backgroundImage: imageError ? 'none' : `url(${bgImage})` }}
        >
            <div className="w-[80%] h-[70vh] relative"
                style={{ left: "50%", top: '60%', transform: "translate(-50%, -50%)", zIndex: '1' }}
            > 
                <HomeContent />
            </div>
        </div>
    );
}
