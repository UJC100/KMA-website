import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Person = {
  picture?: string;
  name?: string;
  country?: string;
  occupation?: string;
  speech?: string;
};
type CarouselProps = {
  images: Person[];
  limit: number;
};

const Carousel = ({ images, limit }: CarouselProps) => {
  const navigate = useNavigate();

  const [imagesArr, setImagesArr] = useState<Person[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (images.length) {
      try {
        setLoading(true);
        setImagesArr(images);
        setLoading(false);
      } catch (error: any) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
  }, [images]);

  useEffect(() => {
    if (isHovered) return;

    const startAutoplay = () => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 7000);
      return () => clearInterval(interval);
    };

    const cleanup = startAutoplay();
    return cleanup;
  }, [images.length, isHovered]);

  if (loading) {
    return <div>Laoding data! Please wait...</div>;
  }

  if (errorMessage !== null) {
    return <div>Error Occured ! {errorMessage}</div>;
  }

  const getPositionClasses = (index) => {
    const isCenter = index === currentSlide;
    const isLeft = index === (currentSlide - 1 + images.length) % images.length;
    const isRight = index === (currentSlide + 1) % images.length;

    if (isCenter) return "translate-x-0 scale-100 z-30 opacity-100";
    if (isLeft) return "-translate-x-[90%] scale-95 z-20 opacity-0";
    if (isRight) return "translate-x-[90%] scale-95 z-20 opacity-0";
    return "opacity-0 scale-90 pointer-events-none z-0";
  };

  return (
    <div className=" relative  h-[650px] md:h-full flex justify-center items-center overflow-hidden">
      {/* Arrows */}
      <ChevronLeftIcon
        onClick={handlePrev}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-8 h-8 absolute left-0  text-amber-400 cursor-pointer z-50"
      />
      <ChevronRightIcon
        onClick={handleNext}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-8 h-8 absolute right-0 md:right-3 text-amber-400 cursor-pointer z-50"
      />

      {/* Slides */}
      <div className=" relative w-[90%] md:w-2/3 h-full flex justify-center items-center">
        {imagesArr.map((img, i) => (
          <div
            key={i}
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`absolute w-full h-[550px] md:h-[350px]  rounded-sm overflow-hidden shadow-2xl transition-all duration-800 ease-in-out transform flex flex-col md:flex-row justify-center items-center  px-7 py-5 gap-5 ${getPositionClasses(
              i
            )}`}
          >
            <div className="border border-amber-500 h-32 w-32 rounded-full shrink-0 overflow-hidden">
              <img
                src={img.picture}
                alt={img.occupation}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-2xl font-bold text-blue-950">{img.name}</h1>
              <h2 className="font-playfair text-xl text-amber-600/90">
                {img.occupation}
              </h2>
              <p className="text-sm italic text-gray-500">
                <span className="text-5xl opacity-50">&quot;</span>
                {img.speech}&quot;
              </p>
              <div className="flex space-x-4 text-xl mt-2 justify-center items-center opacity-70">
                <span className="cursor-pointer">
                  <FaFacebook />
                </span>
                <span className="cursor-pointer">
                  <FaInstagram />
                </span>
                <span className="cursor-pointer">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-7 flex space-x-2 ">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-amber-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
