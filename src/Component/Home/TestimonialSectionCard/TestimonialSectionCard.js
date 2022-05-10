import React from "react";

const TestimonialSectionCard = ({ testimonial }) => {
  const { name, location, img, description } = testimonial;
  return (
    <div>
      <div className="card w-96  shadow-2xl">
        <div className="card-body">
          <p>{description}</p>
          <div className="mt-3 flex justify-start items-center">
            <div className="">
              <img
                style={{ width: "55px" }}
                className="border-2 border-secondary rounded-full"
                src={img}
                alt=""
              />
            </div>
            <div className="pl-5 text-left">
              <h4 className="font-bold">{name}</h4>
              <h5 className="mt-1">{location}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSectionCard;
