import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shear/Loading/Loading";
import BookingModal from "../../Shear/Modal/BookingModal";
import Booking from "./Booking";

const AvailableAppointments = ({ selected }) => {
  const [appointmentData, setAppointmentData] = useState(null);
  const date = format(selected, "PP");

  const {
    data: booking,
    isLoading,
    refetch,
  } = useQuery(["available", date], () =>
    fetch(`http://localhost:5000/available?date=${date}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="pt-10 pb-20 text-center text-secondary font-bold">
        Available Appointments on {format(selected, "PP")}
      </h3>

      <div className="grid px-10  lg:grid-cols-3 text-center  md:grid-cols-2  sm:grid-cols-1 gap-5">
        {booking?.map((book) => (
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
