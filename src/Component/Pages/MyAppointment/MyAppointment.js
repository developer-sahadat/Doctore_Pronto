import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit/Init";
import Loading from "../../Shear/Loading/Loading";

const MyAppointment = () => {
  const [booking, setBooking] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/my-appointment?email=${user?.email}`;

    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res?.status === 401 || res?.status === 403) {
          navigate("/");
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setBooking(data));
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
              <tr key={book?._id}>
                <th>{index + 1}</th>
                <td>{book?.name}</td>
                <td>{book?.treatment}</td>
                <td>{book?.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
