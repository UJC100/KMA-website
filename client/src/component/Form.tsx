import React, { useEffect, useState } from "react";
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

type FormStyles = {
  background?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  paddingY?: boolean;
};

const Spinner = () => (
  <div className="w-5 h-5 border-3 border-t-3 border-gray-200 border-t-yellow-500 rounded-full animate-spin"></div>
);


const Form = ({
  background = false,
  rounded = false,
  shadow = false,
  paddingY = false,
}: FormStyles) => {
  const initialFormValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    country: "",
  };

  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
   const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setShowSuccess(false); // hide with animation first
    }, 4500); // fade before removal

    const remove = setTimeout(() => {
      setSuccess("");
    }, 5000); // actually remove

    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }
}, [success]);

  const minDate = new Date(
    Math.min(...availableDates.map((d) => new Date(d).getTime()))
  );
  const maxDate = new Date(
    Math.max(...availableDates.map((d) => new Date(d).getTime()))
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prev) => ({
      ...prev,
      date: date.toLocaleDateString("en-CA"),
    }));
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.firstName) errors.firstName = "First Name is required";
    if (!values.lastName) errors.lastName = "Last Name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!emailRegex.test(values.email))
      errors.email = "Invalid email format";
    if (!values.country) errors.country = "Country is required";
    if (!values.date) errors.date = "Date is required";
    if (!values.time) errors.time = "Time is required";

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/meetings", formData);
      console.log(res.data);
       setSuccess("✅ Meeting scheduled successfully!");
       setShowSuccess(true);

      setFormData(initialFormValues);
      setErrors({});
      // Optionally: navigate to a success page here.
    } catch (error) {
      console.error("Something went wrong while scheduling!", error);
      setSuccess("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`px-5 md:px-10 space-y-5  
        ${background ? "bg-[#f6f4f0]" : ""} 
        ${shadow ? "shadow-lg" : ""}
        ${rounded ? "rounded-xl" : ""}
        ${paddingY ? "py-6" : ""}
      `}
    >
         {success && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded bg-green-500 text-white shadow-lg transition-all duration-500 ease-in-out ${
      showSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
    }`}>
          {success}
        </div>
      )}

      <h2 className="text-xl text-center md:text-4xl mb-8 font-medium text-gray-800">
        Join Our Mentee Program
      </h2>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          {errors.firstName && (
            <p className="text-sm text-red-500 mb-1">{errors.firstName}</p>
          )}
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="flex-1">
          {errors.lastName && (
            <p className="text-sm text-red-500 mb-1">{errors.lastName}</p>
          )}
          <input
            name="lastName"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        {errors.country && (
          <p className="text-sm text-red-500 mb-1">{errors.country}</p>
        )}
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/70"
        >
          <option value="">Choose a country where you reside</option>
          <option>Australia</option>
          <option>Nigeria</option>
          <option>Philippines</option>
          <option>Others</option>
        </select>
      </div>

      <div>
        {errors.email && (
          <p className="text-sm text-red-500 mb-1">{errors.email}</p>
        )}
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        />
      </div>

      <div>
        {errors.time && (
          <p className="text-sm text-red-500 mb-1">{errors.time}</p>
        )}
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/70"
        >
          <option value="">-- Select a time --</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        {errors.date && (
          <p className="text-sm text-red-500 mb-1">{errors.date}</p>
        )}
        <Calendar
          onClickDay={handleDateChange}
          value={formData.date ? new Date(formData.date) : undefined}
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
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 font-medium cursor-pointer mt-4 mb-5 py-2 px-6 rounded-[5px] bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 hover:text-blue-950 transition-colors duration-200 text-gray-700 shadow-xl"
        disabled={loading}
      >
        {loading ? <Spinner /> : "Schedule Meeting"}
      </button>
    </form>
  );
};

export default Form;