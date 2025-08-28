import Title from "./Title";
import { assets } from "../assets/assets";
import { CheckCircleIcon, UserGroupIcon, CalendarDateRangeIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import AnimateOnScroll from "./AnimationOnScroll";
import { Link, } from "react-router-dom";

const PersonalizedSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-2 py-20  ">
      <AnimateOnScroll direction="right" distance={-100} delay={0.6} className="flex flex-col justify-center items-start">
        <p className="bg-amber-400/50 text-amber-700 px-3.5 py-1 rounded-full mt-20">
          Why Mentoring Club?
        </p>
        <Title
          align="left"
          title="Personalized Growth, On Your Schedule."
          font=""
          subtitle="Stop navigating your career challenges alone. Get matched with experienced professionals who provide actionable advice tailored to your unique goals. Book sessions easily and learn from the best."
        />
        <div className="py-6 flex flex-col justify-center items-start gap-3">
            <p className="flex items-center text-sm font-light text-gray-600/90 gap-4"><CheckCircleIcon className='h-6 w-6 text-green-500'/> Access a diverse pool of vetted, high-quality mentors across industries.</p >
        <p className="flex items-center text-sm font-light text-gray-600/90 gap-4"><CalendarDateRangeIcon className='h-6 w-6 text-green-500'/> Flexible scheduling fits even the busiest calendars.</p>
        <p className="flex items-center text-sm font-light text-gray-600/90 gap-4"> <UserGroupIcon className='h-6 w-6 text-green-500'/> Join a supportive community focused on mutual growth and success.</p>
        </div>
        <Link to={'/team'} className='flex items-center justify-center gap-2 text-xl font-normal cursor-pointer mt-4 mb-5 group transition-colors duration-200 '>Explore Mentors <ArrowLongRightIcon className=' group-hover:translate-x-1 transition-all mt-1 w-6 h-6' /></Link>
      </AnimateOnScroll>

    <div className="overflow-hidden">

      <AnimateOnScroll direction="left" distance={100} delay={0.6}>
     <img src={assets.personalized} alt="mentor-image" className="w-[670px] h-[500px] rounded-xl" />
      </AnimateOnScroll>
    </div>
    </div>
  );
};

export default PersonalizedSection;
