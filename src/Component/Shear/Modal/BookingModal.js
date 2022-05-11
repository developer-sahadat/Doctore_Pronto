import React from "react";

const BookingModal = ({ appointment, selected, setAppointmentData }) => {
  const { name, space } = appointment;

  const submitHandler = (event) => {
    event.preventDefault();

    const time = event.target.time.value;
    const name = event.target.name.value;
    const date = event.target.date.value;
    const number = event.target.number.value;
    const email = event.target.email.value;
    console.log(time, name, date, number, email);

    fetch("http://localhost:5000/booking", {
      method: "POST",
      body: JSON.stringify({
        name,
        number,
        email,
        time,
        date,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    setAppointmentData(null);
    event.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking_modal"
            className="btn bg-black btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg mb-10">{name}</h3>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Date"
              value={selected}
              disabled
              readOnly
              name="date"
              className="input input-bordered w-full max-w-xl mb-3"
            />
            <select
              name="time"
              className="select select-bordered w-full max-w-xl mb-3"
            >
              {space.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="input input-bordered w-full max-w-xl mb-3"
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xl mb-3"
            />
            <input
              type="Email"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full max-w-xl mb-3"
            />
            <div className="modal-action">
              <button for="booking_modal" className="btn w-full bg-black">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
