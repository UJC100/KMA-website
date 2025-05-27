import React from "react";
import Title from "./Title";
import { demoData } from "./demoData";
import Carousel from "./Carousel";


const MeetOurMentors = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-3 py-20 bg-slate-50">
      <Title
        title="Meet Some of Our Inspiring Mentors"
        subtitle="Discover experienced professionals ready to share their knowledge and guide your journey."
        font=""
        align=""
      />
      

      <div>
        <Carousel>
            {demoData.map((data, i ) => {
                return (<img src={data.picture} alt="" key={i}/>)
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default MeetOurMentors;
