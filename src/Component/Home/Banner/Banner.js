import React from "react";
import "./Banner.css";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen banner-container px-10">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold leading-tight">
              Your New Smile Starts <br /> Here
            </h1>
            <p class="py-6 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button class="btn text-white  bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
