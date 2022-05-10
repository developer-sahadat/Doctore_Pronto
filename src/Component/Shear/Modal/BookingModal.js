import React from "react";

const BookingModal = ({ appointment, selected, setAppointmentData }) => {
  const { name, space } = appointment;

  const submitHandler = (event) => {
    event.preventDefault();

    const time = event.target.time.value;
    const name = event.target.name.value;
    console.log(time);
    setAppointmentData(null);
    event.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="booking_modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking_modal"
            class="btn bg-black btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 class="font-bold text-lg mb-10">{name}</h3>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Date"
              value={selected}
              disabled
              readOnly
              name="date"
              class="input input-bordered w-full max-w-xl mb-3"
            />
            <select
              name="time"
              class="select select-bordered w-full max-w-xl mb-3"
            >
              {space.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              class="input input-bordered w-full max-w-xl mb-3"
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xl mb-3"
            />
            <input
              type="Email"
              placeholder="Email"
              name="email"
              class="input input-bordered w-full max-w-xl mb-3"
            />
            <div class="modal-action">
              <button for="booking_modal" class="btn w-full bg-black">
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
