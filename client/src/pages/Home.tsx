import React from 'react';
import Hero from '../component/Hero';
import PersonalizedSection from '../component/PersonalizedSection';
import HeadOn from '../component/HeadOn';
import GlobalNetwork from '../component/GlobalNetwork';
import MeetOurMentors from '../component/MeetOurMentors';
import StartJourney from '../component/StartJourney';
import RealWorld from '../component/RealWorld';
import Testimonials from '../component/Testimonials';
import CallToAction from '../component/CallToAction';


const Home = () => {
  return (
    <>
    <Hero/>
    <PersonalizedSection/>
    <HeadOn/>
    <GlobalNetwork/>
    <MeetOurMentors/>
    <StartJourney/>
    <RealWorld/>
    <Testimonials/>
    <CallToAction/>
    </>
  );
};

export default Home;