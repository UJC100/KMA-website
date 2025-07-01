import React from "react";
import { assets } from "../assets/assets";
import AnimateOnScroll from "./AnimationOnScroll";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

{
  /* <span className='border font-playfair bg-black/60 p-2 rounded-2xl text-amber-400'>Potential</span> */
}

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className=" text-white bg-black/70 bg-blend-overlay bg-[url('/src/assets/premium-photo.jpeg')]  bg-no-repeat bg-cover bg-center ">
      <AnimateOnScroll
        direction="zoom"
        scaleLevel={0.7}
        className="flex flex-col items-center md:items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 h-screen"
      >
        <p className="bg-amber-300/50 text-amber-950 px-3.5 p-y rounded-full mt-20">
          The Ultimate Coaching Experience
        </p>
        <h1 className="font-playfair text-3xl md:text-[56px] md:font-extrabold max-w-[45rem] mt-4">
          Unlock Your{" "}
          <span className=" rounded-2xl bg-black/60 px-2 pt-2 pb-3 w-48 ">
          <TypeAnimation
            sequence={[
              "Potentials.", 10000,
              "Gifts.", 10000,
              "Promise.", 10000,
               "Abilities.", 10000,
               "Possibilities.", 10000,
               "Capabilities.", 10000,
               "Prospects.", 10000,
              ]}
            speed={40}
            wrapper="span"
            className="font-playfair  text-amber-400 inline-block"
            repeat={Infinity}
          />
          </span>
          {" "}
        </h1>
        <h1 className="font-playfair text-3xl md:text-[56px] md:font-extrabold max-w-[45rem]">Expert Mentors Await.</h1>
        <p className=" md:max-w-130 text-center md:text-start mt-2 text-sm md:text-base">
          Connect 1:1 with industry leaders for personalized guidance and career
          acceleration.
        </p>
        <button onClick={() => navigate("/join-team")} className="flex items-center gap-2 text-2xl font-medium cursor-pointer mt-4 mb-5 group border rounded-full p-4 hover:bg-black/60 hover:text-amber-400 hover:border-black transition-colors duration-200">
          Join Our Team{" "}
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="invert group-hover:translate-x-1 transition-all mt-1"
          />
        </button>
      </AnimateOnScroll>
    </div>
  );
};

export default Hero;
