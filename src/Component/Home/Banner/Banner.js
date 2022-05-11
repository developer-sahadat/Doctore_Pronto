import React from "react";
import "./Banner.css";
import chair from "../../../assets/images/chair.png";
import Button from "../../Shear/Button/Button";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen banner-container px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt=""
            src={chair}
            className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <Button> Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
