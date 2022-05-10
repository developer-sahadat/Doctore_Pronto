import React from "react";
import quote from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="flex justify-between items-center py-10 px-10">
      <div>
        <h4 className="text-secondary font-bold">Testimonial</h4>
        <h2 className="mt-3 text-2xl">What Our Patients Says</h2>
      </div>
      <div>
        <img style={{ width: "192px", height: "156px" }} src={quote} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
