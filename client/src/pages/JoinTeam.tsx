import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from 'axios'
import JoinTeamCarousel from "../component/join-team/JoinTeamCarousel";
import { demoData } from "../component/demoData";

const JoinTeam = () => {
  type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  time: string;
  country: string;
};


  const initialFormValues = {firstName: "", lastName: "", email: "", time: '', date: '', country: ""}
  const [formData, setFormData] = useState(initialFormValues)
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  
  const availableDates = [
    "2025-07-02",
    "2025-07-03",
    "2025-07-04",
    "2025-07-08",
  ];
  const availableTimes = [
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
  ];
  const minDate = new Date(
    Math.min(...availableDates.map((d) => new Date(d).getTime()))
  );
  const maxDate = new Date(
    Math.max(...availableDates.map((d) => new Date(d).getTime()))
  );

  const navigate = useNavigate();

 

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleDateChange = (date) => {
    setFormData({...formData, date: date.toLocaleDateString("en-CA")})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData)
    setError(validate(formData))
    setIsSubmit(true)


  if (Object.keys(validationErrors).length > 0) return; 

     const res = await axios.post('http://localhost:3000/meetings', formData);

  ;
  console.log(res)
    // navigate("/payment");
  };
  useEffect(()=> {
    if(Object.keys(error).length === 0 && isSubmit) {
      console.log(formData)
    }
  }, [error, formData, isSubmit])

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.firstName){
      errors.firstName = "First Name is Required"
    }
    if (!values.lastName){
      errors.lastName = "Last Name is Required"
    }

    if (!values.email){
      errors.email = "Email is Required"
    } else if (!regex.test(values.email)) {
    errors.email = "Invalid email format";
    }

    if (!values.date){
      errors.date = "Date is Required"
    }
    if (!values.time){
      errors.time = "Time is Required"
    }
    if (!values.country){
      errors.country = "Country is Required"
    }

    return errors
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-1/2">
        <img src={assets.logo} className="w-30 h-30" alt="logo" />

        <form onSubmit={handleSubmit} className="px-10 space-y-5">
          <h2 className="text-5xl text-center md:text-4xl mb-8 font-medium text-gray-800">
            Join Our Mentee Program
          </h2>

          <div className="flex gap-4">
            <input
            name="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>


          {/* Country */}
          <select name="country" value={formData.country} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/50">
            <option>Choose a country where you reside</option>
            <option>Australia</option>
            <option>Nigeria</option>
            <option>Philippines</option>
            <option>Others</option>
          </select>

          {/* Email */}
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
          />

          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded text-black/50"
          >
            <option value="" >-- Select a time --</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          <Calendar
            onClickDay={handleDateChange}
            value={formData.date ? new Date(formData.date) : null}
            minDate={minDate}
            maxDate={maxDate}
            activeStartDate={minDate}
            tileDisabled={({ date }) => {
              const formatted = date.toLocaleDateString("en-CA");
              const isPast = date.getTime() < new Date().setHours(0, 0, 0, 0);
              const isUnavailable = !availableDates.includes(formatted);
              return isPast || isUnavailable;
            }}
          />
          <button
            type="submit"
            className='w-full font-medium cursor-pointer mt-4 mb-5 py-2 px-6 rounded-[5px] bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 hover:text-blue-950 transition-colors duration-200 text-gray-700 shadow-xl'
          >
            Shedule Meeting
          </button>
        </form>

      </div>
      <div className="bg-[#121820]/90 bg-blend-overlay  bg-[url('/src/assets/blurred-bokeh-light-dark-blue-background_219144-488-2.avif')]  bg-no-repeat bg-cover bg-center  w-1/2 m-5 rounded-2xl pt-25 pb-5 px-15 text-amber-500">
            <div>
              <h1 className="text-5xl md:text-4xl mb-4 font-light w-2/3">Guidance made easy — connect, learn, succeed</h1>
              <p className="text-sm font-light">Enter your details to shedule a meeting with a coach.</p>
            </div>
            <div className=" my-7 *:min-h-[300px]  w-full">
              <JoinTeamCarousel  mentorsData={demoData}/>
            </div>
            <div></div>
      </div>
    </div>
  );
};

export default JoinTeam;
