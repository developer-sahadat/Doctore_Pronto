import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="container px-20 mb-5 mx-auto">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        <div className="text-white rounded-lg p-10  bg-gradient-to-r  from-secondary   to-primary">
          1
        </div>
        <div className="bg-accent rounded-lg p-10  text-white">2</div>
        <div className="text-white p-10 rounded-lg bg-gradient-to-r  from-secondary   to-primary">
          3
        </div>
      </div>
    </div>
  );
};

export default Information;
