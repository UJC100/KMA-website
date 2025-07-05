import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { demoData } from "../component/demoData";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import TabNavigation from "../component/mentors-page-components/TabNavigation";

const MentorsPage = () => {
  const { id } = useParams();

  const mentor = demoData.find((_, i) => {
    const newId = i.toString();

    return newId === id;
  });

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  if (!mentor) return <div>Mentor Not Found</div>;


  return (
    <div className="relative w-full h-min-screen flex flex-col pt-30 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-[#eff0ee]-100 to-[#f7f7f7] overflow-hidden">
        <div className="  ">
      {/* Blurred profile background */}
      <img
        src={mentor.picture}
        alt="Profile Blur"
        className="absolute top-0 w-72 h-72 md:w-full md:h-1/2 rounded-full object-cover object-bottom filter blur-3xl opacity-40"
      />

      {/* Optional frosted overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-end">
        <div className="  flex flex-col md:flex-row items-end  gap-6 px-4">
          <div>
            <img
              src={mentor.picture}
              alt="Profile"
              className="w-24 h-24 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
          <div className="mb-4">
            <h1 className="mt-4 text-xl md:text-3xl font-bold text-gray-800">
              Shyam Balagurumurthy Viswanathan
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              AI Research - Integrity at Meta Platforms
            </p>

            {/* Example of categories, you can wrap in flex + wrap for mobile */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-black text-amber-400  text-xs px-3 py-2 rounded-full">
                DataScience & Analytics
              </span>
              <span className="bg-black text-amber-400 text-xs px-3 py-2 rounded-full">
                Entrepreneurship
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex space-x-2 text-xl mt-2 justify-center items-center opacity-70">
            <span className="cursor-pointer bg-white p-3 rounded-md shadow-lg">
              <FaFacebook />
            </span>
            <span className="cursor-pointer bg-white p-3 rounded-md shadow-lg">
              <FaInstagram />
            </span>
            <span className="cursor-pointer bg-white p-3 rounded-md shadow-lg">
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10">
        <TabNavigation/>
    </div>
    </div>
    
  );
};

export default MentorsPage;
