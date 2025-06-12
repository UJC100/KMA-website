import React from 'react';
import { testimonials } from './demoData';
import Marquee from 'react-fast-marquee'
import Title from './Title';
import AnimateOnScroll from './AnimationOnScroll';


const Testimonials = () => {
    const bgColors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-orange-200",
];


  return (
        <div className='flex flex-col items-center justify-center  gap-3 py-20'>
            <AnimateOnScroll direction='down' distance={60} className='pb-15'>

            <Title title='Real Stories, Real Impact' subtitle='Hear directly from members about their transformative experiences.'/>
            </AnimateOnScroll>
 
             <Marquee speed={30} autoFill>
                <div className='flex gap-3'>
                {testimonials.map((testimonial, i) => {
                    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

                    return <div key={i} className={`flex md:flex-row justify-center items-center gap-6 max-w-[450px] ${randomColor} rounded-full pr-5`}>
                        <img src={testimonial.image} alt={testimonial.name} className='rounded-full  h-40 w-40'/>
                        <div>
                            <p className='text-sm text-gray-700 italic'>{`"${testimonial.text}"`}</p>
                            <h2 className=' text-blue-950 font-bold  mt-3'>{testimonial.name}</h2>
                            <p className='font-playfair text-xl text-gray-700'>{testimonial.position}</p>
                        </div>
                    </div>
    })}
                </div>
             </Marquee>

             <Marquee autoFill direction='right' speed={10}>
                <div className='flex gap-3'>
                {testimonials.map((testimonial, i) => {
                    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

                    return <div key={i} className={`flex md:flex-row justify-center items-center gap-6 max-w-[450px] ${randomColor} rounded-full pr-5`}>
                        <img src={testimonial.image} alt={testimonial.name} className='rounded-full  h-40 w-40'/>
                        <div>
                            <p className='text-sm text-gray-700 italic'>{`"${testimonial.text}"`}</p>
                            <h2 className=' text-blue-950 font-bold  mt-3'>{testimonial.name}</h2>
                            <p className='font-playfair text-xl text-gray-700'>{testimonial.position}</p>
                        </div>
                    </div>
    })}
                </div>
             </Marquee>

             <Marquee autoFill speed={20}>
                <div className='flex gap-3'>
                {testimonials.map((testimonial, i) => {
                    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];

                    return <div key={i} className={`flex md:flex-row justify-center items-center gap-6 max-w-[450px] ${randomColor} rounded-full pr-5`}>
                        <img src={testimonial.image} alt={testimonial.name} className='rounded-full  h-40 w-40'/>
                        <div>
                            <p className='text-sm text-gray-700 italic'>{`"${testimonial.text}"`}</p>
                            <h2 className=' text-blue-950 font-bold  mt-3'>{testimonial.name}</h2>
                            <p className='font-playfair text-xl text-gray-700'>{testimonial.position}</p>
                        </div>
                    </div>
    })}
                </div>
             </Marquee>
        </div>
    
    );
};

export default Testimonials;