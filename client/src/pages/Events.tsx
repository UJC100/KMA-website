import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { events } from '../component/demoData';



const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(events[0]);
    
  return (
    <div className="h-screen bg-[#f4f3ea] flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 ">
        <div className="relative flex justify-center pt-24 pb-4 ">
      <h1 className=" text-center relative  inline-block text-6xl font-playfair font-semibold text-gray-800">
        Upcoming Events
        <span className="absolute left-1/2 -bottom-1 w-60 h-[1px] bg-gray-800 -translate-x-1/2"></span>
      </h1>
        </div>
      <div className=''>
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-8">
      {/* LEFT: Events List */}
      <div className=" bg-white h-[570px] p-5">
        {events.map((event, i) => (
          <div
            key={i}
            className={`cursor-pointer group hover:bg-amber-200 transition-colors duration-300 ${selectedEvent === event ? 'bg-yellow-200' : 'bg-white'}`}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="flex items-center justify-between border-b border-b-[#c9c6a1]">
              <p className="text-xl pl-3">{event.date}</p>
              
              <p className=" group-hover:text-black max-w-xs text-2xl font-medium w-2/3  border-l border-l-[#c9c6a1] px-3 py-4 font-playfair ">
                {event.title}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      {/* RIGHT: Image Block with Slide Animation */}
      <div className="relative w-full md:w-2/3 overflow-hidden h-[570px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedEvent.image}
            src={selectedEvent.image}
            alt={selectedEvent.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Events;
