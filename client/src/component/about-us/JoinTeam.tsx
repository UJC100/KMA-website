import React from 'react';
import AnimateOnScroll from '../AnimationOnScroll';
import { assets } from '../../assets/assets';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';


const JoinTeam = () => {
  return (
        
        <div className="relative w-full py-24 my-10 bg-white overflow-hidden h-screen flex justify-center items-center">
      {/* Image Collage */}
      <div className="absolute top-7 left-0 md:w-90 z-0 w-40 h-70">
        <img src={assets.aboutUsPhoto4} alt="Team" className="w-full h-full object-cover shadow-lg" />
      </div>

      <div className="absolute top-0 right-90 w-40 md:w-64 h-40 z-0">
        <img src={assets.aboutUsPhoto5} alt="Team" className="w-full h-full object-cover shadow-lg" />
      </div>

      <div className="absolute bottom-56 left-12 w-50  h-64 z-0">
        <img src={assets.aboutUsPhoto6} alt="Team" className="w-full h-full object-cover shadow-lg" />
      </div>

      <div className="absolute top-14 right-0 w-60 md:w-60 h-96 z-0">
        <img src={assets.aboutUsPhoto9} alt="Team" className="h-full w-full object-cover shadow-lg" />
      </div>

      <div className="absolute bottom-14 right-12 w-60 md:w-96 h-60 z-0">
        <img src={assets.aboutUsPhoto8} alt="Team" className="h-full w-full object-cover shadow-lg" />
      </div>
      <div className=" absolute bottom-10 left-90 right-0 w-40 md:w-64 h-52 z-0">
        <img src={assets.aboutUsPhoto7} alt="Team" className="h-full w-full object-cover shadow-lg" />
      </div>
      
    

      {/* Center Content */}
     <AnimateOnScroll 
         direction="zoom"
        scaleLevel={0.7}  className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light mb-4">Our team</h2>
        <p className="font-light text-lg mb-6">
          At Away, you’ll find suitcases, bags, and accessories built with thoughtful details to make each and every journey more seamless.
        </p>
        <button className='flex items-center justify-center gap-2 text-xl font-medium cursor-pointer  group'>JOIN OUR TEAM <ArrowLongRightIcon className=' group-hover:translate-x-1 transition-all w-7 h-7 ' /></button>
        
    
    </AnimateOnScroll>
    </div>
    );
};

export default JoinTeam;