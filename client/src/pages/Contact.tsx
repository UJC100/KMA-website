import React, { useEffect } from 'react';
import { contactDetails } from '../component/demoData';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Contact = ({isOpen, onClose}:ContactModalProps) => {
     useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out ${
        isOpen ? 'visible opacity-100 backdrop-blur-sm bg-black/20' : 'invisible opacity-0'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        // Responsive width and padding
        className={`bg-[#f6f4f0] p-4 md:p-6 shadow-xl w-full max-w-[95vw] md:max-w-2xl lg:max-w-3xl relative transform transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-amber-600 hover:text-amber-700 text-3xl cursor-pointer"
        >
          &times;
        </button>

        <main className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-6">
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            {contactDetails.map((detail, i) => {
              const IconComponent = detail.icon;
              return (
                <div key={i} className="py-3">
                  <h1 className="flex items-center pb-3 gap-2 font-bold text-gray-700 text-base md:text-lg">
                    <IconComponent className="text-amber-600 h-5 w-5" /> {detail.text}
                  </h1>
                  <p className="text-sm text-gray-600">{detail.details}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-bold mb-4 text-center">Contact Us</h2>
            <form>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full border-0 border-b-2 border-gray-600 focus:outline-none pt-6 pb-2 placeholder:text-sm"
              />
              <input
                type="email"
                placeholder="Enter Your Valid Email Address"
                className="w-full border-0 border-b-2 border-gray-600 focus:outline-none pt-6 pb-2 placeholder:text-sm"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border-b-2 border-gray-600 focus:outline-none resize-none pt-6 pb-2 placeholder:text-sm"
              ></textarea>
              <button className="py-2 px-4 gap-2 text-sm font-normal cursor-pointer bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 text-blue-950 transition-colors duration-200 hover:text-gray-600 w-full mt-4">
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;