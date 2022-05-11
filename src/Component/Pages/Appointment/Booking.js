import React from "react";

const Booking = ({ booking, setAppointmentData }) => {
  const { name, space } = booking;
  return (
    <div className="card lg:max-w-lg p-7  bg-base-100 shadow-2xl">
      <div className="card-body">
        <h2 className=" text-xl text-secondary font-bold text-center">
          {name}
        </h2>
        <p className="mt-1 font-medium">
          {space.length ? (
            <span>{space[0]}</span>
          ) : (
            <span style={{ color: "red" }}>Not Available</span>
          )}{" "}
        </p>
        <p> {space.length} SPACES AVAILABLE</p>
        <div className="card-actions justify-center mt-3">
          <label
            onClick={() => setAppointmentData(booking)}
            disabled={space.length === 0}
            htmlFor="booking_modal"
            className="btn text-white  bg-gradient-to-r from-secondary to-primary modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
