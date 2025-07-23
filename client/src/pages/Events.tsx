import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../component/demoData";
import { Link, useNavigate } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Events = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const eventId = selectedEvent.id

  return (
    <div className="lg:h-full bg-[#f4f3ea] flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 py-4">
      <div className="relative flex justify-center pt-24 pb-4 ">
        <h1 className=" text-center relative  inline-block text-4xl md:text-6xl font-playfair font-semibold text-gray-800">
          Upcoming Events
          <span className="absolute left-1/2 -bottom-1 w-60 h-[1px] bg-gray-800 -translate-x-1/2"></span>
        </h1>
      </div>
      <div>
        <div className="hidden lg:flex  md:flex-row items-start justify-center gap-8 p-8">
          {/* LEFT: Events List */}
          <div className=" border border-amber-100 bg-white h-[570px] p-5">
            {events.map((event, i) => (
              <div
                key={i}
                className={`cursor-pointer group hover:bg-amber-200 transition-colors duration-300 ${
                  selectedEvent === event ? "bg-yellow-200" : "bg-white"
                }`}
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
              <motion.div
                key={selectedEvent.image}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full bg-center bg-cover  bg-black/60 bg-blend-overlay text-white"
                style={{
                  backgroundImage: `url(${selectedEvent.image})`,
                }}
              >
                <div className="h-full flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-bold font-playfair text-center">
                    {selectedEvent.title}
                  </h1>
                  <p className="text-3xl font-playfair">{selectedEvent.date}</p>
                  <p className="font-playfair flex items-center">
                    <span>
                      <MapPinIcon className="h-4 w-4" />
                    </span>
                    {selectedEvent.location}
                  </p>
                  {selectedEvent.isPaid && (
                    <button
                      onClick={() => navigate(`/reservation/${eventId}`)}
                      className="text-5xl text-black font-playfair font-bold bg-white border rounded-md shadow-[0_6px_0_0_rgba(0,0,0,0.8)]
                    hover:scale-105 
                    hover:shadow-[0_4px_0_0_rgba(0,0,0,0.8)] 
                    transition-all duration-400 ease-in-out py-4 px-8 mt-5"
                    >
                      Book a Seat
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE: Cards view — visible only on mobile */}
        <div className="block lg:hidden space-y-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="flex justify-center items-center w-full h-[600px] bg-center bg-cover rounded-md overflow-hidden text-white bg-black/60 bg-blend-overlay"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="flex flex-col items-center  p-6">
                <h1 className="text-3xl font-bold font-playfair text-center">
                  {event.title}
                </h1>
                <p className="text-xl font-playfair">{event.date}</p>
                <p className="font-playfair flex items-center text-center text-sm">
                  <MapPinIcon className="h-4 w-4" />
                  {event.location}
                </p>
                {event.isPaid && (
                  <Link
                    to={""}
                    className="text-xl text-black font-playfair font-bold bg-white border rounded-md shadow-[0_6px_0_0_rgba(0,0,0,0.8)]
                  hover:scale-105 
                  hover:shadow-[0_4px_0_0_rgba(0,0,0,0.8)] 
                  transition-all duration-400 ease-in-out py-2 px-4 mt-4"
                  >
                    Book a Seat
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
