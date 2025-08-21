import React from "react";
import Title from "./Title";
import Carousel from "./Carousel";
import AnimateOnScroll from "./AnimationOnScroll";
import { demoData } from './demoData';


const MeetOurMentors = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-3 py-20 bg-[#f6f4f0]">
       <AnimateOnScroll direction='down' distance={60}>
      <Title
        title="Meet Some of Our Inspiring Mentors"
        subtitle="Discover experienced professionals ready to share their knowledge and guide your journey."
        font=""
        align=""
      />
      </AnimateOnScroll>
      

      <div className=" *:min-h-[500px] p-10 w-full">
        <Carousel images={demoData} limit={5}/>
            
      </div>
    </div>
  );
};

export default MeetOurMentors;
