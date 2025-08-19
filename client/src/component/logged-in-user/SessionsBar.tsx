import React from 'react';
import { assets } from '../../assets/assets';
import { BookOpenIcon, CalendarDateRangeIcon, ChatBubbleBottomCenterTextIcon, ClockIcon } from '@heroicons/react/24/outline';


const SessionsBar = () => {
  return (
  <main className='bg-white px-4 py-6 rounded-xl shadow-md'>
    <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-4 '>
              <div className="border h-20 w-20 rounded-full shrink-0 overflow-hidden">
              <img
                src={assets.teamMember1}
                alt={''}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
                <h2 className='font-semibold text-xl'>Musa Mandem</h2>
                <p className='text-sm text-gray-400'>Software engineer</p>
                <span className=' py-1 px-2 text-sm text-white bg-green-500 rounded-2xl'>Active</span>
            </div>
        </div>
        <div>
            <h2 className='text-4xl font-semibold flex flex-col items-center pr-20'><span className='font-playfair'>Topic:</span> How To Monitize Your Skills</h2>
        </div>
    </div>
    <hr className='text-amber-300' />
    <div className='flex items-center justify-between mt-4'>
        <div className='flex items-center gap-4'>
        <p className='flex items-center gap-1 font-semibold  shadow rounded-2xl px-3 bg-amber-50'><ChatBubbleBottomCenterTextIcon className='h-5 w-5'/>3</p>
        <p className='flex items-center gap-1 font-semibold  shadow rounded-2xl px-3 bg-amber-50'><BookOpenIcon className='h-5 w-5'/>Career Development</p>
        </div>
        <div className='flex items-center gap-4'>
            <p className='font-semibold flex items-center gap-1  shadow rounded-2xl px-3 bg-amber-50'><CalendarDateRangeIcon className='w-5 h-5'/>25-8-18</p>
            <p className='font-semibold flex items-center gap-1  shadow rounded-2xl px-3 bg-amber-50'><ClockIcon className='w-5 h-5'/>12:00 PM</p>
        </div>
    </div>
  </main>
);
};

export default SessionsBar;