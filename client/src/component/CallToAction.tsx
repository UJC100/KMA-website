import React from 'react';
import Title from './Title';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import AnimateOnScroll from './AnimationOnScroll';


const CallToAction = () => {
  return (
            <div className="text-white bg-black/70 bg-blend-overlay bg-[url('/src/assets/call-to-action.jpg')]  bg-no-repeat bg-cover bg-center h-[400px] flex flex-col justify-center items-center">
                  <AnimateOnScroll direction='zoom' scaleLevel={0.7} className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 gap-6'>


                    
                    <h1 className='text-4xl font-bold md:text-[50px] mt-2 max-w-[1000px] font-playfair'>Ready to Elevate Your Career?</h1>

                    <p className='text-gray-400 text-xl w-[70%] text-center'>Join thousands finding success through mentorship. Your next breakthrough is just a session away.</p>

                 <button className='flex items-center justify-center py-4 px-6 rounded-md  gap-2 text-xl font-normal cursor-pointer  group bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 hover:text-blue-950 transition-colors duration-200 text-gray-600 '>Get Started Today <ArrowLongRightIcon className=' group-hover:translate-x-1 transition-all w-4 h-4' /></button>

                  </AnimateOnScroll>
                
            </div>
        );
};

export default CallToAction;