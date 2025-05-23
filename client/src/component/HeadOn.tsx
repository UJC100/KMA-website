import React from 'react';
import Title from './Title';
import { CheckIcon } from '@heroicons/react/24/outline';


const HeadOn = () => {
  return (
    <div className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-3 py-20 bg-slate-50'>
        <Title title='Tackle Your Leadership & Career Challenges
        Head-On' 
        subtitle='No more second-guessing. No more feeling alone with tough decisions. Get fast, tailored
        support from mentors who’ve been there.'
        font=''
        align=''
        />
        <div className='flex flex-row items-center gap-7 my-8'>
            <div className='flex flex-col gap-3  rounded-xl shadow-xl bg-white  p-7 font-light text-sm'>
                <h2 className='text-[17.5px] font-medium  text-blue-950'>What if you had a safe space to ask any question?</h2>
                <p className='text-gray-500'>Imagine having seasoned leaders just a message away—ready to help you handle difficult
                colleagues, give feedback that actually works, and navigate team conflicts without stressing
                out.</p>
                <p className='text-gray-600 flex items-center gap-3'><CheckIcon className='w-5 h-5 text-green-500 '/>Stay calm under pressure with real-world tips from expert mentors.</p>
                <p className='text-gray-600 flex items-center gap-3'><CheckIcon className='w-5 h-5 text-green-500'/>Get immediate, personalized advice when a crisis pops up.</p>
            </div>

            <div className='flex flex-col gap-3  rounded-xl shadow-xl bg-white p-7 font-light text-sm'>
                <h2 className='text-[17.5px] font-medium  text-blue-950'>What if you had a safe space to ask any question?</h2>
                <p className='text-gray-500'>Imagine having seasoned leaders just a message away—ready to help you handle difficult
                colleagues, give feedback that actually works, and navigate team conflicts without stressing
                out.</p>
                <p className='text-gray-600 flex items-center gap-3'><CheckIcon className='w-5 h-5 text-green-500 '/>Stay calm under pressure with real-world tips from expert mentors.</p>
                <p className='text-gray-600 flex items-center gap-3'><CheckIcon className='w-5 h-5 text-green-500'/>Get immediate, personalized advice when a crisis pops up.</p>
            </div>
        </div>


        <p className='text-sm md:text-[17px] text-gray-600/90 mt-2 max-w-174'>And the best part? It won’t cost you a monthly subscription to join us.</p>
          <button className=' text-sm font-medium cursor-pointer mt-4 mb-5 py-2 px-6 rounded-[5px] bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 hover:text-blue-950 transition-colors duration-200 text-gray-600 shadow-xl'>Find Your Mentor Today</button>
    </div>
  );
};

export default HeadOn;