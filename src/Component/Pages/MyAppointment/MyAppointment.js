import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../FirebaseInit/Init";
import Loading from "../../Shear/Loading/Loading";

const MyAppointment = () => {
  const [booking, setBooking] = useState([]);
  const [user, loading] = useAuthState(auth);
  console.log(booking);

  useEffect(() => {
    const url = `http://localhost:5000/my-appointment?email=${user?.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((book, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
