"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const AboutUs = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0.0001, 1]);
  return (
    <div className="p-5 md:px-[130px] flex flex-col relative "
    id="about">
      <div
        className="blue__gradient absolute md:top-[-450px] md:right-[600px] h-[300px] w-[250px] md:h-[500px] md:w-[600px] "
        data-aos="zoom-in"
        data-aos-duration="700"
      />
      <h1
        className="text-white w-fit md:text-7xl text-5xl py-6 "
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        About Us
      </h1>
      <div>
        <p
          className="text-white text-1xl md:text-2xl text-justify  "
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          The <span className="gradient-text-animation">Embrione</span> is a
          peer-to-peer based tech community, under the CSE vertical of PES
          University, Bangalore. The club mainly focuses on Providing a platform
          and opportunities for students to grow and develop their skill sets.
          The club focuses at students in the first and second years by
          organising beginner-friendly hackathons and other such technical
          events. We bring together fresh minds and give them a stage the
          freedom to unleash their full potential.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
