import React from "react";
import { assets } from "../assets/assets";
import AnimateOnScroll from "./AnimationOnScroll";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

{
  /* <span className='border font-playfair bg-black/60 p-2 rounded-2xl text-amber-400'>Potential</span> */
}

const Hero = () => {
  return (
   
   <div className="relative text-black flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen overflow-hidden backdrop-blur-md bg-[#f6f4f0] p-4 md:p-10">



  {/* Glassmorphism container */}
  <div className="relative z-10 w-full flex flex-col xl:flex-row justify-between items-center space-y-10 xl:gap-10 gap-6">

    {/* LEFT CONTENT */}
    <AnimateOnScroll
      direction="zoom"
      scaleLevel={0.7}
      className="flex flex-col items-center xl:items-start justify-center space-y-3 w-full md:w-[40%] text-center md:text-left text-[#3A3A3A]"
    >
      <p className="bg-amber-400 text-amber-950 px-3.5 py-1 rounded-full mt-10 md:mt-20 text-sm md:text-base">
        The Ultimate Coaching Experience.
      </p>

      <h1 className="font-sans text-[60px]  xl:text-[80px] text-center font-bold max-w-[45rem] mt-4">
        Unlock Your{" "}
      </h1>

      <span className="rounded-2xl border bg-black px-3 py-2 mb-6 text-3xl md:text-[70px] font-bold ">
        <TypeAnimation
          sequence={[
            "Potentials.", 5000,
            "Gifts.", 5000,
            "Promise.", 5000,
            "Abilities.", 5000,
            "Possibilities.", 5000,
            "Capabilities.", 5000,
            "Prospects.", 5000,
          ]}
          speed={40}
          wrapper="span"
          className="font-sans text-amber-400 inline-block"
          repeat={Infinity}
        />
      </span>

      <h1 className="font- text-3xl xl:text-[40px] font-bold max-w-[45rem]">
        Expert Mentors Await.
      </h1>

          <div className="flex items-center gap-4">

      <Link
        to={"/join-team"}
        className="flex items-center gap-1 text-sm xl:text-lg font-medium cursor-pointer mt-15 group rounded-xl px-6 py-6 bg-black text-amber-400 hover:bg-amber-400 hover:text-black hover:border-black transition-colors duration-200 "
      >
        Join Our Team{" "}
        <img
          src={assets.arrowIcon}
          alt="arrow-icon"
          className="invert group-hover:translate-x-1 transition-all mt-1 w-4 md:w-6"
        />
      </Link>
      <Link
        to={"/join-team"}
        className="flex items-center gap-1 text-sm xl:text-lg font-medium cursor-pointer mt-15  group rounded-xl px-6 py-6  text-black bg-amber-400 hover:bg-black hover:text-amber-400 transition-colors duration-200"
      >
        Get Started{" "}
        <img
          src={assets.arrowIcon}
          alt="arrow-icon"
          className="invert group-hover:translate-x-1 transition-all mt-1 w-4 md:w-6"
        />
      </Link>
          </div>
    </AnimateOnScroll>

    {/* RIGHT GRID */}
    <div className="grid grid-cols-4 items-center gap-5 ">
  {/* LEFT COLUMN */}
  {/* <div className="flex flex-col gap-4  pt-20">
    <img src={assets.teamMember1} className=" rounded-tl-4xl rounded-br-4xl object-cover w-60 h-60  shadow-xl object-top" />
    <div className="flex justify-end">
    <img src={assets.teamMember2} className="rounded-tr-4xl rounded-bl-4xl object-cover w-35 h-35 object-top " />
    </div>
  </div> */}

  {/* CENTER IMAGE */}
  <div className="relative">
    <img src={assets.teamMember1} className="object-cover w-36 h-[600px] rounded-md" />
    <div className="absolute inset-0 bg-black/10"></div>
  </div>
  <div className="mt-20 relative">
    <img src={assets.teamMember3} className="object-cover w-36 h-[600px] rounded-md " />
      <div className="absolute inset-0 bg-black/10"></div>
  </div>
  <div className="relative">
    <img src={assets.teamMember2} className="object-cover w-36 h-[600px] rounded-md" />
    <div className="absolute inset-0 bg-black/10"></div>
  </div>
  <div className="mt-20 relative">
    <img src={assets.teamMember4} className="object-cover w-36 h-[600px] rounded-md" />
    <div className="absolute inset-0 bg-black/10"></div>
  </div>
  


  {/* RIGHT COLUMN */}
  {/* <div className="flex flex-col gap-4 pb-30">
    <img src={assets.teamMember4} className=" object-cover w-35 h-35 object-top rounded-tr-4xl rounded-bl-4xl" />
    <img src={assets.teamMember5} className=" object-cover w-60 h-60 object-top rounded-tl-4xl rounded-br-4xl" />
  </div> */}
</div>
  </div>
</div>
  );
};

export default Hero;
