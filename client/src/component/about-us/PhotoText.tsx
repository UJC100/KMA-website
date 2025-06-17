import React from 'react';


interface HeroSectionProps {
  image: string;
  title: string;
  description: string;
  flip?: boolean;
}


const PhotoText = ({flip = false, image, title, description}: HeroSectionProps) => {
  return (
        <div className={`flex flex-col md:flex-row items-center ${
        flip ? 'md:flex-row-reverse' : ''
      }`}>
        <img src={image} alt={title} className=' md:w-1/2 h-[700px] bg-black/50' />
         <div className="flex flex-col justify-center items-start md:text-left max-w-1/2 px-10">
        <h1 className="text-6xl mb-8 font-light">{title}</h1>
        <p className="text-lg font-extralight ">{description}</p>
      </div>
        </div>
    );
};

export default PhotoText;