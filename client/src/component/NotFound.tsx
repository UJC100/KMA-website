import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

 const  NotFound = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden bg-no-repeat bg-cover"
     style={{ backgroundImage: `url(${assets.notFoundBg})` }}
    >
      

      {/* Astronaut image with float animation */}
      <motion.img
        src={assets.astronaut}
        alt="Lost Astronaut"
        className="w-40 md:w-72 z-10 bg-"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <h1 className="text-6xl md:text-8xl font-bold text-white z-10 mt-8">404</h1>
      <p className="text-white text-lg mt-2 z-10">
        Looks like our astronaut got lost in space.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-black rounded-full z-10 hover:bg-blue-400 transition-colors"
      >
        Take me home 🚀
      </Link>
    </div>
  );
}
export default NotFound