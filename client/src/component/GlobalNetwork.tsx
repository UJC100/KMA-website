import { GlobeAltIcon, LinkIcon, StarIcon, UsersIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Title from './Title';
import CountUp  from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


type ScrollTriggerProps = React.PropsWithChildren<{
  onEnter?: () => void;
  onExit?: () => void;
}>;

const ScrollTriggerComponent = ScrollTrigger as unknown as React.ComponentType<ScrollTriggerProps>;

const GlobalNetwork = () => {

    const [countOn, setCountOn] = useState(false)
  return (
    <div className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-3 py-20'>
        <Title title='Join a Thriving Global Network' subtitle="We're proud of the vibrant community we've built and the impact we make
        together." font='' align=''/>

        <ScrollTriggerComponent onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
                 <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 py-10'>
        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700/70 bg-opacity-30  text-gray-700">
                <span>
                    <StarIcon className='h-8 w-8'/>
                </span>
                <p className='text-4xl mt-2 font-semibold'>{}%</p>
                <p className='text-sm'>Mentee Satisfaction</p>
            </div>

        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-700/70 via-yellow-500 to-yellow-300 bg-opacity-30  text-gray-700">
                <span>
                    <UsersIcon className='h-8 w-8'/>
                </span>
                {/* <p className='text-4xl mt-2 font-semibold'>{}K+</p> */}
                {countOn && <CountUp start={0} end={96} duration={2} delay={0}/>}
                
                <p className='text-sm'>Active mentors</p>
            </div>
        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700/70 bg-opacity-30  text-gray-700">
                <span>
                    <GlobeAltIcon className='h-8 w-8'/>
                </span>
                <p className='text-4xl mt-2 font-semibold'>{}+</p>
                <p className='text-sm'>Countries Represented</p>
            </div>
        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-700/70 via-yellow-500 to-yellow-300 bg-opacity-30  text-gray-700">
                <span>
                    <LinkIcon className='h-8 w-8'/>
                </span>
                <p className='text-4xl mt-2 font-semibold'>{}K</p>
                <p className='text-sm'>Monthly Connection</p>
            </div>
            
        </div>
        </ScrollTriggerComponent>
       
    </div>
  );
};

export default GlobalNetwork;