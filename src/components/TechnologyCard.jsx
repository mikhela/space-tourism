import React, { useState, useMemo, useCallback } from 'react';
import launchVehicleimg from '../images/technology/image-launch-vehicle-portrait.jpg';
import spaceportimg from '../images/technology/image-spaceport-portrait.jpg';
import spaceCapsuleimg from '../images/technology/image-space-capsule-portrait.jpg';

// Preload images
const preloadImages = [launchVehicleimg, spaceportimg, spaceCapsuleimg];
preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

export default function TechnologyCard() {
  const [technoActive, setTechnoActive] = useState('launchVehicle');

  const technologies = useMemo(() => ({
    launchVehicle: {
      id: '1',
      name: 'Launch Vehicle',
      description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. This vehicle is the backbone of space exploration, providing the necessary thrust to escape Earth\'s gravity and deliver spacecraft, satellites, and other payloads to their intended destinations.',
      image: launchVehicleimg,
    },
    spaceport: {
      id: '2',
      name: 'Spaceport',
      description: 'A spaceport, also known as a cosmodrome, is a site for launching (or receiving) spacecraft. The facilities at a spaceport are capable of supporting spacecraft launch and recovery operations, including large areas for assembly, integration, and testing, as well as infrastructure for launching various types of launch vehicles.',
      image: spaceportimg,
    },
    spaceCapsule: {
      id: '3',
      name: 'Space Capsule',
      description: 'A space capsule is a crewed spacecraft designed to transport astronauts and cargo to and from space. Unlike the shuttle, which had wings, space capsules are typically more compact and are engineered to re-enter the Earth\'s atmosphere safely by leveraging aerodynamic shape, heat shields, and parachutes.',
      image: spaceCapsuleimg,
    },
  }), []);

  const handleNavClick = useCallback((key) => {
    setTechnoActive(key);
  }, []);

  return (
    <div className='animationtech-left flex justify-between flex-wrap'>
      <div className="flex items-center gap-6 lg:gap-12 w-[450px] mx-auto">
        <div className="left-asdor">
          {Object.keys(technologies).map((key) => (
            <button 
              key={key}
              onClick={() => handleNavClick(key)}
              className={`text-base w-12 h-12 lg:text-xl mt-4 block lg:w-20 lg:h-20 rounded-full border-2 ${technoActive === key ? 'border-white bg-white text-black' : 'border-gray-500 text-gray-500'} cursor-pointer`}
            >
              {technologies[key].id}
            </button>
          ))}
        </div>
        <div className="right-asdor">
          <h1 className="font-bellefair md:text-5xl mt-3 text-3xl text-white">
            {technologies[technoActive].name}
          </h1>
          <p className="text-bar font-normal tracking-wide text-white text-xs md:text-lg w-[300px] lg:w-[450px] max-w-full mt-6 mx-auto md:mx-0">
            {technologies[technoActive].description}
          </p>
        </div>
      </div>

      <div className="animationtech right-content-technology mt-8 mx-auto mb-12">
        <img 
          src={technologies[technoActive].image} 
          alt={technologies[technoActive].name} 
          className="w-full h-auto mt-8" 
        />
      </div>
    </div>
  );
}
