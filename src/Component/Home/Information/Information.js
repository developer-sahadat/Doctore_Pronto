import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="container px-15 mb-5 mx-auto">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        <div className="text-white rounded-lg p-10  bg-gradient-to-r  from-secondary   to-primary">
          <div className="flex items-center">
            <div className="mr-5">
              <i className="text-6xl fa-solid fa-clock"></i>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Opening Hours</h5>
              <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
          </div>
        </div>
        <div className="bg-accent rounded-lg p-10  text-white">
          <div className="flex items-center">
            <div className="mr-5">
              <i className="text-6xl fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Visit our location</h5>
              <p>Brooklyn, NY 10036, United States</p>
            </div>
          </div>
        </div>
        <div className="text-white p-10 rounded-lg bg-gradient-to-r  from-secondary   to-primary">
          <div className="flex items-center">
            <div className="mr-5">
              <i className="text-6xl fa-solid fa-phone"></i>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Contact us now</h5>
              <p>+000 123 456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
