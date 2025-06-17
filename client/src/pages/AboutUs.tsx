import React from 'react';
import Hero from '../component/about-us/Hero';
import PhotoText from '../component/about-us/PhotoText';
import { assets } from '../assets/assets';


const AboutUs = () => {
  return (
         <div >
            <Hero/>
            <PhotoText image={assets.aboutUsPhoto1} title='Our Why' description='We believe the more we travel, the better we all become. That’s why our travel essentials are designed to last (and last) for every trip to come, so you can get out there and explore.'/>
            <PhotoText image={assets.aboutUsPhoto2} title='Our Approach' description='We believe the more we travel, the better we all become. That’s why our travel essentials are designed to last (and last) for every trip to come, so you can get out there and explore.' flip/>
            <PhotoText image={assets.aboutUsPhoto3} title='Our Passion' description='We believe the more we travel, the better we all become. That’s why our travel essentials are designed to last (and last) for every trip to come, so you can get out there and explore.'/>
        </div>
        );
};

export default AboutUs;