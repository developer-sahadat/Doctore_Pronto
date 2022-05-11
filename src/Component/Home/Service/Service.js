import React from "react";

const Service = ({ service }) => {
  const { title, img, description } = service;
  return (
    <div>
      <div className="card w-full	 lg:max-w-lg bg-base-100 shadow-2xl">
        <figure className=" p-5 lg:px-10 lg:pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
