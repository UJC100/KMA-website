import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {  FaCheckCircle } from "react-icons/fa";
import Form from "../Form";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="relative z-10 py-8">
      {/* Tabs */}
      <div className="border-b border-gray-500 flex space-x-4  ">
        {[
          { key: "profile", label: "Mentor Profile", icon: <UserIcon className="w-5 h-5"/> },
          { key: "schedule", label: "Schedule", icon: <CalendarIcon className="w-5 h-5"/> },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-1 px-4 py-2 cursor-pointer hover:border-b-2  hover:border-gray-500 font-light text-gray-600 ${
              activeTab === tab.key
                ? "border-b-2  border-gray-800 text-gray-700  font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 ">
        {activeTab === "profile" && (
          <div className="grid md:grid-cols-[60%_40%] md:space-x-7 space-y-7">
            <p className="rounded-xl bg-white shadow-lg self-start p-8 text-sm md:text-lg  font-light text-gray-800 leading-relaxed">
              Hi - After studying Sociology and Business Economics I started my
              career in the field of pharmaceutical market research in a leading
              international agency (GfK). During this time I have developed
              expertise in both qualitative and quantitative methodologies, with
              a main focus on large-scale quantitative studies and advanced
              analytics. I have experience in various therapeutic areas,
              including oncology, diabetes, CNS and auto-immune diseases. My
              background also inccludes client-side experience working as Market
              Research Consultant for Eli Lilly. In my previous role at
              technology start-up symanto, we applied machine learning and
              artificial intelligence for natural language processing. We
              focused on utilizing new technologies to innovate understanding of
              consumers on the basis of already existing data, e.g. social media
              and CRM data bases. I am Design Sprint facilitator and in my
              current role leverage and evolve our global physician platform for
              business insights. I would be happy to chat if anything of the
              above could be of help.
            </p>
            <div className="flex items-center gap-4 border border-green-500 bg-green-100/40 rounded-xl p-4 self-start">
                <FaCheckCircle className="text-green-700 h-6 w-6"/>
                <div>
                    <h1 className="text-green-700 text-xl font-semibold">Certified Coach</h1>
                    <p className="text-sm font-light">Provided 10+ hours of successful mentorship on this platform.</p>
                </div>

            </div>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="flex justify-center ">
           <Form paddingY={true} rounded={true} shadow={true} background={true}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabNavigation;
