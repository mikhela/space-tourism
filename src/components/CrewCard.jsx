import React, { useState, useMemo } from 'react';
import douglasimg from '../images/crew/image-douglas-hurley.webp';
import markimg from '../images/crew/image-mark-shuttleworth.webp';
import victorimg from '../images/crew/image-victor-glover.webp';
import anoushenimg from '../images/crew/image-anousheh-ansari.webp';

const preloadImages = [douglasimg, markimg, victorimg, anoushenimg];
preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

const CrewCard = React.memo(() => {
    const [activeCrew, setActiveCrew] = useState('douglas');
    
    const crewMembers = useMemo(() => ({
        douglas: {
          id: 'douglas',
          name: 'Douglas Hurley',
          role: 'Commander',
          description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot, and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
          image: douglasimg,
        },
        mark: {
          id: 'mark',
          name: 'Mark Shuttleworth',
          role: 'Mission Specialist',
          description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu. He was the first South African to travel to space as a space tourist.',
          image: markimg,
        },
        victor: {
          id: 'victor',
          name: 'Victor Glover',
          role: 'Pilot',
          description: 'Victor Glover is a commander in the U.S. Navy and served as a pilot on the first operational flight of the SpaceX Crew Dragon to the ISS. He was also a crew member of Expedition 64.',
          image: victorimg,
        },
        anousheh: {
          id: 'anousheh',
          name: 'Anousheh Ansari',
          role: 'Flight Engineer',
          description: 'Anousheh Ansari is an Iranian American engineer and the first self-funded woman to fly to the ISS, as well as the first Iranian in space.',
          image: anoushenimg,
        },
    }), []);

    const handleIndicatorClick = (key) => {
        setActiveCrew(key);
    };

    return (
        <div className='text-white md:flex md:justify-between'>
            <div className="content-left-crew w-full sm:w-[500px] mx-auto mt-20">
                <h3 className="text-bar font-normal tracking-wide text-gray-500 text-3xl w-[350px] lg:w-[450px] max-w-full mt-6 mx-auto md:mx-0">
                    {crewMembers[activeCrew].role.toUpperCase()}
                </h3>
                <h1 className="font-bellefair md:text-5xl mt-3 text-3xl w-[350px] lg:w-[450px] max-w-full mt-6 mx-auto md:mx-0">
                    {crewMembers[activeCrew].name.toUpperCase()}
                </h1>
                <h3 className="text-bar font-normal tracking-wide text-gray-300 text-sm md:text-lg w-[350px] lg:w-[450px] max-w-full mt-6 mx-auto md:mx-0">
                    {crewMembers[activeCrew].description}
                </h3>
                
                <div className="indicators flex gap-3 mt-32 w-[350px] lg:w-[450px] max-w-full mt-6 mx-auto md:mx-0">
                    {Object.keys(crewMembers).map((key) => (
                        <div 
                            key={key}
                            onClick={() => handleIndicatorClick(key)}
                            className={`w-8 h-8 rounded-full cursor-pointer ${activeCrew === key ? 'bg-white' : 'bg-gray-700'}`}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="content-right-crew md:w-1/2 mt-32">
                <img src={crewMembers[activeCrew].image} alt={crewMembers[activeCrew].name} className='content-right-crew-img w-full md:w-1/3 md:fixed md:bottom-0'/>
            </div>
        </div>
    );
});

export default CrewCard;
