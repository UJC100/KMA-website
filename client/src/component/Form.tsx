import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { availableDates, availableTimes } from "./demoData";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  time: string;
  country: string;
};

type formStyles = {
  background?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  paddingY?: boolean;
}

const Form = ({background=false, rounded=false, shadow=false, paddingY=false}: formStyles) => {
  const initialFormValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    time: "",
    date: "",
    country: "",
  };

  const [formData, setFormData] = useState(initialFormValues);
  const [error, setError] = useState<Partial<FormValues>>({});
  const [isSubmit, setIsSubmit] = useState(false);


  const minDate = new Date(
    Math.min(...availableDates.map((d) => new Date(d).getTime()))
  );
  const maxDate = new Date(
    Math.max(...availableDates.map((d) => new Date(d).getTime()))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date) => {
    setFormData({ ...formData, date: date.toLocaleDateString("en-CA") });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setError(validationErrors);
    setIsSubmit(true);

    if (Object.keys(validationErrors).length > 0) return;

    const res = await axios.post("http://localhost:3000/meetings", formData);
    console.log(res);
    // navigate("/payment");
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [error, formData, isSubmit]);

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.firstName) errors.firstName = "First Name is Required";
    if (!values.lastName) errors.lastName = "Last Name is Required";
    if (!values.email) errors.email = "Email is Required";
    else if (!regex.test(values.email)) errors.email = "Invalid email format";
    if (!values.date) errors.date = "Date is Required";
    if (!values.time) errors.time = "Time is Required";
    if (!values.country) errors.country = "Country is Required";

    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className={`px-5 md:px-10 space-y-5  
       ${background ? 'bg-[#f6f4f0]': ''} 
       ${shadow ? 'shadow-lg': ''}
       ${rounded? 'rounded-xl' : ''}
       ${paddingY? 'py-6' : ''}
    `}>
      <h2 className="text-xl text-center md:text-4xl mb-8 font-medium text-gray-800">
        Join Our Mentee Program
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
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

      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/50"
      >
        <option>Choose a country where you reside</option>
        <option>Australia</option>
        <option>Nigeria</option>
        <option>Philippines</option>
        <option>Others</option>
      </select>

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
        <option value="">-- Select a time --</option>
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
        className="w-full font-medium cursor-pointer mt-4 mb-5 py-2 px-6 rounded-[5px] bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 hover:text-blue-950 transition-colors duration-200 text-gray-700 shadow-xl"
      >
        Schedule Meeting
      </button>
    </form>
  );
};

export default Form;