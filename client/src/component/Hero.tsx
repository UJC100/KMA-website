import React from 'react';
import { assets } from '../assets/assets';


const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-black/70 bg-blend-overlay bg-[url('/src/assets/heroImage3.jpg')]  bg-no-repeat bg-cover bg-center h-screen ">
      <p className='bg-amber-300/50 text-amber-900 px-3.5 p-y rounded-full mt-20'>The Ultimate Coaching Experience</p>
      <h1 className='font-playfair text-2xl md:text-[56px] md:font-extrabold max-w-[45rem] mt-4'>Unlock Your <span className='border font-playfair bg-black/60 p-2 rounded-2xl text-amber-400'>Potential</span> Faster.
      Expert Mentors Await.</h1>
      <p className='max-w-130 mt-2 text-sm md:text-base'>Connect 1:1 with industry leaders for personalized guidance and
      career acceleration.</p>
      <button className='flex items-center gap-2 text-2xl font-medium cursor-pointer mt-4 mb-5 group border rounded-full p-4 hover:bg-black/60 hover:text-amber-400 hover:border-black transition-colors duration-200'>Join Our Team <img src={assets.arrowIcon} alt="arrow-icon" className='invert group-hover:translate-x-1 transition-all mt-1' /></button>
    </div>
    
    );
};

export default Hero;