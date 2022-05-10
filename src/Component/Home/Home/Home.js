import React from "react";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Exceptional from "../ExceptionalSection/Exceptional";
import Information from "../Information/Information";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <Services />
      <Exceptional />
      <Appointment />
    </>
  );
};

export default Home;
