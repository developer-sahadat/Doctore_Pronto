import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <div>
      <div className="hero min-h-screen banner-container px-10 bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt=""
            src={chair}
            className="md:max-w-lg  max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-20 shadow-2xl rounded-xl">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
