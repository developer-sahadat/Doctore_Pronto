import React from "react";
import treatment from "../../../assets/images/treatment.png";
import Button from "../../Shear/Button/Button";

const Exceptional = () => {
  return (
    <div>
      <div className="hero min-h-screen px-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm ml-10 rounded-lg shadow-2xl"
          />
          <div className="pl-20">
            <h1 className="text-5xl leading-tight font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <div className="mt-5">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
