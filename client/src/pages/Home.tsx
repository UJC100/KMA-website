import React from 'react';
import Hero from '../component/Hero';
import PersonalizedSection from '../component/PersonalizedSection';
import HeadOn from '../component/HeadOn';
import GlobalNetwork from '../component/GlobalNetwork';
import MeetOurMentors from '../component/MeetOurMentors';
import StartJourney from '../component/StartJourney';


const Home = () => {
  return (
    <>
    <Hero/>
    <PersonalizedSection/>
    <HeadOn/>
    <GlobalNetwork/>
    <MeetOurMentors/>
    <StartJourney/>
    </>
  );
};

export default Home;