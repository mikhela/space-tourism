import React, { useState, useMemo, useCallback } from 'react';
import marsimg from '../images/destination/image-mars.png';
import europaimg from '../images/destination/image-europa.webp';
import moonimg from '../images/destination/image-moon.png';
import titanimg from '../images/destination/image-titan.png';

// Preload images
const preloadImages = [marsimg, europaimg, moonimg, titanimg];
preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

const DestinationCard = () => {
  const [activeDestination, setActiveDestination] = useState('mars');

  const destinations = useMemo(() => ({
    mars: {
      id: 'mars',
      name: 'Mars',
      description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is known for its reddish appearance due to iron oxide on its surface. Mars hosts the largest volcano, Olympus Mons, and the deepest canyon, Valles Marineris.',
      image: marsimg,
      distance: '225 million km',
      travelTime: '9 months',
    },
    europa: {
      id: 'europa',
      name: 'Europa',
      description: 'Europa is one of Jupiter’s moons and is the sixth-largest moon in the Solar System. It features a smooth ice-covered surface and is believed to have a subsurface ocean beneath its icy crust. Europa is a key target in the search for extraterrestrial life due to its potential habitability.',
      image: europaimg,
      distance: '628 million km',
      travelTime: '6 years',
    },
    titan: {
      id: 'titan',
      name: 'Titan',
      description: 'Titan is Saturn’s largest moon and the second-largest in the Solar System. It has a dense atmosphere rich in nitrogen and methane and features lakes and rivers of liquid methane and ethane. Titan’s atmosphere and surface conditions make it one of the most Earth-like bodies in the Solar System.',
      image: titanimg,
      distance: '1.2 billion km',
      travelTime: '7 years',
    },
    moon: {
      id: 'moon',
      name: 'Moon',
      description: 'The Moon is Earth’s only natural satellite and the fifth-largest moon in the Solar System. It is known for its phases, craters, and the influence it has on Earth’s tides. The Moon’s surface is covered in regolith and features large, flat plains called maria.',
      image: moonimg,
      distance: '384,400 km',
      travelTime: '3 days',
    },
  }), []);

  const handleNavClick = useCallback((destination) => {
    setActiveDestination(destination);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbardestination mt-12 flex justify-around border-b-2 border-gray-600 w-full">
        {Object.keys(destinations).map((key) => (
          <button
            key={key}
            onClick={() => handleNavClick(key)}
            className={`py-2 px-4 text-white ${activeDestination === key ? 'border-b-2 border-white' : 'text-white'}`}
          >
            {destinations[key].name}
          </button>
        ))}
      </nav>
      
      {/* Destination Content */}
      <div className="mt-12">
        <img 
          className='planet fixed -left-1/2' 
          src={destinations[activeDestination].image} 
          alt={destinations[activeDestination].name} 
        />
        
        <div className="informationplanets text-white w-1/3">
          <h1 className="font-bellefair md:text-8xl mt-3 text-6xl">
            {destinations[activeDestination].name}
          </h1>
          <p className="mt-2 text-gray-200 border-b-2 pb-8 border-mainColor">
            {destinations[activeDestination].description}
          </p>
          <div className="flex justify-between mt-4 text-xl">
            <p>
              <span className='text-gray-400 block'>AVG. DISTANCE</span>
              <span className='text-white font-bellefair text-xl'>
                {destinations[activeDestination].distance}
              </span>
            </p>
            <p>
              <span className='text-gray-400 block'>EST. TRAVEL TIME</span>
              <span className='text-white font-bellefair text-xl'>
                {destinations[activeDestination].travelTime}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
