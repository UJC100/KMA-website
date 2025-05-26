import {
  GlobeAltIcon,
  LinkIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AnimationOnScroll from "./AnimationOnScroll";

const GlobalNetwork = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32  gap-3 py-20">
    <AnimationOnScroll direction="down" distance={60}>
      <Title
        title="Join a Thriving Global Network"
        subtitle="We're proud of the vibrant community we've built and the impact we make
        together."
        font=""
        align=""
      />
        </AnimationOnScroll>

      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-10">
        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700/70 bg-opacity-30  text-gray-700">
          <span>
            <StarIcon className="h-8 w-8" />
          </span>

          {startCounting ? (
            <p className="text-4xl mt-2 font-semibold">
              <CountUp
                start={0}
                end={96}
                duration={2}
                delay={0}
                useEasing={false}
              />
              %
            </p>
          ) : (
            0
          )}
          <p className="text-sm">Mentee Satisfaction</p>
        </div>

        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-700/70 via-yellow-500 to-yellow-300 bg-opacity-30  text-gray-700">
          <span>
            <UsersIcon className="h-8 w-8" />
          </span>
          { startCounting ? <p className="text-4xl mt-2 font-semibold">
           <CountUp
              start={0}
              end={8}
              duration={2}
              delay={0}
              useEasing={false}
            />
            K+
          </p> : 0}

          <p className="text-sm">Active mentors</p>
        </div>
        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700/70 bg-opacity-30  text-gray-700">
          <span>
            <GlobeAltIcon className="h-8 w-8" />
          </span>
          {startCounting?  <p className="text-4xl mt-2 font-semibold">
            <CountUp
              start={0}
              end={160}
              duration={2}
              delay={0}
              useEasing={false}
            />
            +
          </p> : 0}
          <p className="text-sm">Countries Represented</p>
        </div>
        <div className="flex flex-col justify-center items-center p-6 px-18 rounded shadow-xl backdrop-blur-md bg-gradient-to-r from-yellow-700/70 via-yellow-500 to-yellow-300 bg-opacity-30  text-gray-700">
          <span>
            <LinkIcon className="h-8 w-8" />
          </span>
          {startCounting ? <p className="text-4xl mt-2 font-semibold">
            <CountUp
              start={0}
              end={2.5}
              decimals={1}
              duration={2}
              delay={0}
              useEasing={false}
            />
            K
          </p> : 0}
          <p className="text-sm">Monthly Connection</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
