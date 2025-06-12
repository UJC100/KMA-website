import React from "react";
import Title from "./Title";
import { articlesData } from "./demoData";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import AnimateOnScroll from "./AnimationOnScroll";

const RealWorld = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-3 pt-20 pb-30 bg-slate-50">
        <AnimateOnScroll direction="down" distance={60}>
      <Title
        title="Explore Real-World Challenges"
        subtitle="Sometimes you don’t realize a mentor can help until you see the everyday problems they’ve already solved. Check out some of our most common scenarios—each with its own deep-dive of practical tips and recommended reads."
        font=""
        align=""
      />
        </AnimateOnScroll>

        <AnimateOnScroll direction="down" distance={60} delay={0.4}>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 flex-col md:flex-row py-10">
        {
            articlesData.map((item, i) => {
                return (
                    <div key={i} className="flex flex-col max-w-96 rounded-md bg-slate-50 shadow-xl">
                        
                        <img src={item.image} alt={item.title} className="object-cover w-full  h-40 rounded-t-md"/>
                       
                        <div className=" flex flex-col items-start p-4 gap-3">
                        <h2 className='font-playfair text-xl font-bold text-blue-950'>{item.title}</h2>
                        <p className='text-sm text-gray-500'>{item.subtitle}</p>

                         <button className='flex items-center justify-center gap-2 text-sm font-normal cursor-pointer  group transition-colors duration-200 text-amber-600'>Read More <ArrowLongRightIcon className=' group-hover:translate-x-1 transition-all w-4 h-4'/></button>
                        </div>
                        
                    </div>
                )
            })
        }
      </div>
        </AnimateOnScroll>

     

        <AnimateOnScroll direction="down" distance={60} delay={0.4} className="flex flex-col justify-center items-center gap-5">
            <p className="text-gray-600 text-center md:text-start">Curious about other challenges? Explore our entire problem directory.</p>
            <button className='flex items-center justify-center py-2 px-4 rounded-md  gap-2 text-sm font-normal cursor-pointer  group bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 hover:text-blue-950 transition-colors duration-200 text-gray-600 '>See All Problems <ArrowLongRightIcon className=' group-hover:translate-x-1 transition-all w-4 h-4' /></button>
        </AnimateOnScroll>
    </div>
  );
};

export default RealWorld;
