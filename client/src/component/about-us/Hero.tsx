import React from 'react';
import AnimateOnScroll from '../AnimationOnScroll';


const Hero = () => {
  return (
    <div
     className=" text-white bg-zinc-800/50 bg-blend-overlay bg-[url('/src/assets/Group-photo3.webp')]  bg-no-repeat bg-cover bg-center ">
        <AnimateOnScroll
         direction="zoom"
        scaleLevel={0.7}
        className='flex justify-center items-center text-white text-6xl h-screen'>
            <h1 className=''>Our Story</h1>
        </AnimateOnScroll>
    </div>
        );
};

export default Hero;