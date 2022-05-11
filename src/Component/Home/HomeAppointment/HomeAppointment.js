import React from "react";
import "./Appointment.css";
import doctor from "../../../assets/images/doctor-small.png";
import Button from "../../Shear/Button/Button";

const Appointment = () => {
  return (
    <div className=" py-20 my-20">
      <div className="appointment_container ">
        <div className="flex items-center lg:px-20">
          <img
            alt=""
            src={doctor}
            style={{ marginTop: "-100px" }}
            className="max-w-lg bg-transparent hidden lg:block rounded-lg "
          />
          <div className="text-white lg:w-2/4 ml-10 py-3">
            <h3 className="mb-3 text-secondary">Appointment</h3>
            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button> Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
