import React from "react";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Exceptional from "../ExceptionalSection/Exceptional";
import HomeContact from "../HomeContact/HomeContact";
import Information from "../Information/Information";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <Services />
      <Exceptional />
      <Appointment />
      <Testimonial />
      <TestimonialSection />
      <HomeContact />
    </>
  );
};

export default Home;
