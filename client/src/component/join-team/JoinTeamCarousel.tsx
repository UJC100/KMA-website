import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";



type Person = {
  picture?: string;
  name?: string;
  country?: string;
  occupation?: string;
  speech?: string;
};
type CarouselProps = {
  mentorsData: Person[];
  limit?: number;
};

const JoinTeamCarousel = ({ mentorsData, limit }: CarouselProps) => {
  const [mentorsDataArr, setMentorsData] = useState<Person[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mentorsData.length) % mentorsData.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % mentorsData.length);
  };

  useEffect(() => {
    if (mentorsData.length) {
      try {
        setLoading(true);
        setMentorsData(mentorsData);
        setLoading(false);
      } catch (error: any) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    }
  }, [mentorsData]);

  useEffect(() => {
    if (isHovered) return;

    const startAutoplay = () => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % mentorsData.length);
      }, 50000);
      return () => clearInterval(interval);
    };

    const cleanup = startAutoplay();
    return cleanup;
  }, [mentorsData.length, isHovered]);

  if (loading) {
    return <div>Laoding data! Please wait...</div>;
  }
  console.log(mentorsData);

  if (errorMessage !== null) {
    return <div>Error Occured ! {errorMessage}</div>;
  }

  

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-[1500ms] ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {mentorsDataArr.map((img, i) => (
          <div
            key={i}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex-none w-full flex flex-col justify-center "
          >
            <img
              src={img.picture}
              alt={img.occupation}
              className="bg-slate-400 rounded-full object-cover w-[50px] h-[50px]"
            />
            <div className="flex flex-col justify-center gap-1">
              <p className="font-light text-gray-400 my-7">
                &quot;{img.speech}&quot;
              </p>
              <h1 className="text-gray-300 font-semibold">{img.name}</h1>
              <h2 className="font-playfair text-xl">{img.occupation}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-3">
        <div className="border rounded-full p-1">
          <ChevronLeftIcon
            onClick={handlePrev}
            className="  w-5 h-5 text-amber-400 cursor-pointer "
          />
        </div>
        <div className="border rounded-full p-1">
          <ChevronRightIcon
            onClick={handleNext}
            className=" w-5 h-5 text-amber-400 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTeamCarousel;
