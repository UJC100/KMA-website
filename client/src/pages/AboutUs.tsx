import React from "react";
import Hero from "../component/about-us/Hero";
import PhotoText from "../component/about-us/PhotoText";
import { assets } from "../assets/assets";
import JoinTeam from "../component/about-us/JoinTeam";

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <PhotoText
        image={assets.aboutUsPhoto1}
        title="Our Mission"
        description="We exist to help entrepreneurs, ministry leaders, and individuals:

Clarify their God-given purpose and identity

Align their skills, talents, and passions with their divine assignment

Build sustainable systems for growth, visibility, networking, and partnerships

Walk in confidence without compromising their individuality or mission
"
      />
      <PhotoText
        image={assets.aboutUsPhoto10}
        title="Why We Exist"
        description="Many believers feel called to do more but struggle with questions like:

Where do I start?

How do I stay consistent?

What if I’ve tried before and failed?

How do I show up bigger without losing myself?


At KMA, we bridge that gap. We provide mentorship rooted in faith, strategy, and practical guidance — so you can step boldly into your purpose and thrive in every area of your calling.

"
flip
      />
      <PhotoText
        image={assets.aboutUsPhoto2}
        title="What Makes Us Different"
        description="This isn’t about hype, quick fixes, or surface-level motivation. We focus on kingdom-driven empowerment — helping you cultivate clarity, visibility, and strategy that is deeply rooted in biblical principles. With us, you’ll find the encouragement, accountability, and community needed to walk out your assignment and make lasting impact."
      />
      <PhotoText
        image={assets.aboutUsPhoto3}
        title="Our Heart for You"
        description="We’re here to remind you: you don’t have to do this alone. Your God-given vision matters, and the world is waiting for what you carry. Together, let’s unlock your potential, strengthen your foundation, and equip you to show up as who God created you to be."
        flip
      />
      <JoinTeam />
    </div>
  );
};

export default AboutUs;
