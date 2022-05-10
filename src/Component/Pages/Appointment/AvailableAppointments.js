import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../Shear/Modal/BookingModal";
import Booking from "./Booking";

const AvailableAppointments = ({ selected }) => {
  const [booking, setBooking] = useState([]);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    fetch("Appointments.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div>
      <h3 className="pt-10 pb-20 text-center text-secondary font-bold">
        Available Appointments on {format(selected, "PP")}
      </h3>

      <div className="grid px-10  lg:grid-cols-3 text-center  md:grid-cols-2  sm:grid-cols-1 gap-5">
        {booking.map((book) => (
          <Booking
            setAppointmentData={setAppointmentData}
            key={book._id}
            booking={book}
          />
        ))}
      </div>
      {appointmentData && (
        <BookingModal
          selected={format(selected, "PP")}
          appointment={appointmentData}
          setAppointmentData={setAppointmentData}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
