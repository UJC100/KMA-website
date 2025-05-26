import React from 'react';

interface Props {
    title: string;
    subtitle: string;
    align: string;
    font: string
}

const Title = ({title, subtitle, align, font}: Props) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center gap-2 ${align === "left" && "md:items-start md:text-left"}`}>
    <h1 className={`text-4xl font-bold md:text-[50px] mt-2 max-w-[1000px] text-blue-950 ${font || 'font-playfair'}`}>{title}</h1>
    <p className="text-sm md:text-[17px] text-gray-600/90 mt-2 max-w-174"> {subtitle}</p>
</div>
  )
};

export default Title;