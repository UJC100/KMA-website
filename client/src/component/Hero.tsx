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
   
    <div className="relative text-black flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 h-screen overflow-hidden backdrop-blur-md bg-white/30 p-4 md:p-10">

  {/* Gradient blobs for glow */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur-3xl opacity-60 animate-floatOne"></div>
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur-3xl opacity-60 animate-floatTwo"></div>

  <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur-3xl opacity-60 animate-floatThree "></div>

  {/* Glassmorphism container */}
  <div className="relative z-10 w-full h-[90%] flex justify-between items-center ">

    {/* LEFT CONTENT */}
    <AnimateOnScroll
      direction="zoom"
      scaleLevel={0.7}
      className="pr-10 flex flex-col items-center md:items-start justify-center w-[40%] text-[#3A3A3A]"
    >
      <p className="bg-amber-500/50 text-amber-950 px-3.5 py-1 rounded-full mt-20">
        The Ultimate Coaching Experience.
      </p>
      <h1 className="font-playfair text-2xl text-black md:text-[85px] md:font-bold max-w-[45rem] mt-4">
        Unlock Your{" "}
      </h1>
      <span className="rounded-2xl border bg-black px-2 pt-2 pb-3 mb-6 text-2xl md:text-[70px] md:font-extrabold">
        <TypeAnimation
          sequence={[
            "Potentials.",
            10000,
            "Gifts.",
            10000,
            "Promise.",
            10000,
            "Abilities.",
            10000,
            "Possibilities.",
            10000,
            "Capabilities.",
            10000,
            "Prospects.",
            10000,
          ]}
          speed={40}
          wrapper="span"
          className="font-playfair text-amber-400 inline-block"
          repeat={Infinity}
        />
      </span>{" "}
      <h1 className="font-playfair text-3xl md:text-[40px] md:font-extrabold max-w-[45rem]">
        Expert Mentors Await.
      </h1>
      <Link
        to={"/join-team"}
        className="flex items-center gap-2 text-2xl font-medium cursor-pointer mt-4 mb-5 group rounded-full p-4 bg-black text-amber-400 hover:border-black transition-colors duration-200"
      >
        Join Our Team{" "}
        <img
          src={assets.arrowIcon}
          alt="arrow-icon"
          className="invert group-hover:translate-x-1 transition-all mt-1"
        />
      </Link>
    </AnimateOnScroll>

    {/* RIGHT GRID */}
    <div className="grid grid-cols-5 gap-5 place-items-center w-[60%]">
      <div className="stream-container">
        <div
          className="w-[100px] h-[100px] rounded-full mb-2"
          style={{ backgroundColor: "orange" }}
        ></div>
        <img
          src={assets.teamMember1}
          alt=""
          className="w-[100px] h-[200px] rounded-[50px] object-cover cursor-pointer mb-2"
        />
      </div>

      <div className="stream-container">
        <img
          src={assets.teamMember2}
          alt=""
          className="w-[100px] h-[200px] rounded-[50px] object-cover cursor-pointer mb-2 "
        />
        <div
          className="w-[100px] h-[200px] rounded-[50px] mb-2"
          style={{ backgroundColor: "orange" }}
        ></div>
      </div>

      <div className="stream-container">
        <div className="w-[100px] h-[200px] rounded-[50px] mb-2 bg-blue-400"></div>
        <img
          src={assets.teamMember3}
          alt=""
          className="w-[100px] h-[200px] rounded-[50px] object-cover cursor-pointer mb-2"
        />
        <img
          src={assets.teamMember4}
          alt=""
          className="w-[100px] h-[200px] rounded-[50px] object-cover cursor-pointer mb-2"
        />
      </div>

      <div className="stream-container">
        <img
          src={assets.teamMember5}
          alt=""
          className="w-[100px] h-[200px] rounded-[50px] object-cover cursor-pointer mb-2 "
        />
        <div
          className="w-[100px] h-[200px] rounded-[50px] mb-2"
          style={{ backgroundColor: "#ea7360" }}
        ></div>
      </div>

      <div className="stream-container">
        <img
          src={assets.teamMember6}
          alt=""
          className="w-[100px] h-[200px] rounded-[50px] object-cover cursor-pointer mb-2"
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default Hero;
