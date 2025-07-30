import React, { useEffect } from 'react';
import Hero from '../component/Hero';
import PersonalizedSection from '../component/PersonalizedSection';
import HeadOn from '../component/HeadOn';
import GlobalNetwork from '../component/GlobalNetwork';
import MeetOurMentors from '../component/MeetOurMentors';
import StartJourney from '../component/StartJourney';
import RealWorld from '../component/RealWorld';
import Testimonials from '../component/Testimonials';
import CallToAction from '../component/CallToAction';
import { useAuth, useUser } from '@clerk/clerk-react';
import axios from 'axios'


const Home = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const callProtectedRoute = async () => {
      try {
        const token = await getToken();

        await axios.get('http://localhost:3000/users/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('User synced with backend!');
      } catch (err) {
        console.error('Sync error:', err);
      }
    };

    if (user) {
      callProtectedRoute();
    }
  }, [user]); 

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