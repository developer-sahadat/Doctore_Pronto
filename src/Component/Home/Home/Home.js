import React from "react";
import Appointment from "../HomeAppointment/HomeAppointment";
import Banner from "../Banner/Banner";
import Exceptional from "../ExceptionalSection/Exceptional";
import HomeContact from "../HomeContact/HomeContact";
import Information from "../Information/Information";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import Footer from "../../Shear/Footer/Footer";

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
      <Footer />
    </>
  );
};

export default Home;
