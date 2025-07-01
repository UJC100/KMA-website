import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Calendar from 'react-calendar';

const JoinTeam = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [menteeName, setMenteeName] = useState('');
  const [menteeEmail, setMenteeEmail] = useState('');
const availableDates = ['2025-06-25', '2025-06-26', '2025-06-28'];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Save form data to backend or localStorage
    navigate("/payment");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-1/2">
      <img src={assets.logo} className="w-30 h-30" alt="logo" />

        <form
          onSubmit={handleSubmit}
          className="px-10 py-14 space-y-7"
        >
          <h2 className="text-5xl md:text-4xl mb-8 font-medium text-gray-800">Join Our Mentee Program</h2>

         <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Address */}
        <input
          type="text"
          placeholder="Street address"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {/* City, State, Zip */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="State"
            className="w-1/3 border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Postcode"
            className="w-1/3 border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>

        {/* Country */}
        <select className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-600">
          <option>Choose a country</option>
          <option>Australia</option>
          <option>Nigeria</option>
          <option>Philippines</option>
          <option>Others</option>
        </select>

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        />
          

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Proceed to Payment
          </button>
        </form>
         <div className="border rounded-lg p-4 shadow-sm mb-4">
        <Calendar
  onClickDay={setSelectedDate}
  value={selectedDate}
  tileDisabled={({ date }) => {
    const today = new Date();
    const formatted = date.toISOString().split('T')[0];
    const isPast = date.getTime() < today.setHours(0, 0, 0, 0);

    const isUnavailable = !availableDates.includes(formatted);
    return isPast || isUnavailable;
  }}
  className="rounded border"
/>
      </div>
      </div>
      <div className="bg-amber-500 w-1/2 m-5 rounded-2xl">
      </div>
    </div>
  );
};

export default JoinTeam;
