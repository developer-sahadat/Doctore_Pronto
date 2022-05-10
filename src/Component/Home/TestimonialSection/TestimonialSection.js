import React from "react";
import people1 from "../../../assets/images/people1.png";
import TestimonialSectionCard from "../TestimonialSectionCard/TestimonialSectionCard";

const TestimonialSection = () => {
  const testimonial = [
    {
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: people1,
      _id: 1,
    },
    {
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: people1,
      _id: 2,
    },
    {
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      location: "California",
      img: people1,
      _id: 3,
    },
  ];
  return (
    <div className="px-10 py-10">
      <div className="grid  lg:grid-cols-3 text-center  md:grid-cols-2  sm:grid-cols-1 gap-10">
        {testimonial.map((testimonial) => (
          <TestimonialSectionCard
            testimonial={testimonial}
            key={testimonial._id}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
