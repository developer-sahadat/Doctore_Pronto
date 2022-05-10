import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-20 mb-10 px-20">
      <h4 className="text-center mb-2 font-bold text-secondary">
        OUR SERVICES
      </h4>
      <h2 className="text-center text-2xl mb-6">Services We Provide</h2>
      <div className="grid  lg:grid-cols-3 text-center  md:grid-cols-2  sm:grid-cols-1 gap-10">
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
