import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useState, type ReactNode } from 'react';


type CarouselProps = {
  children: ReactNode;
};

const Carousel = ({children: }: CarouselProps) => {

    const [curr, setCurr] = useState(0)

    const prev = () => {
        setCurr((curr) => (curr === 0 ? children.))
    }
  return (
  <div className='overflow-hidden relative'>

    <div className='flex '>{children}</div>
    <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white '>
             
            <ChevronLeftIcon className='w-6 h-6'/>
        </button>
        <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white '>
            <ChevronRightIcon className='w-6 h-6'/>
        </button>
    </div>
  </div>
  );
};

export default Carousel;