import React from "react";
import appointment from "../../../assets/images/appointment.png";
import Button from "../../Shear/Button/Button";

const HomeContact = () => {
  return (
    <div className="py-10">
      <div
        class="hero py-20"
        style={{
          backgroundImage: `url(${appointment})`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h3 class="mb-2 text-xl text-secondary">Contact Us</h3>
            <h3 class="mb-10 text-3xl font-bold">Stay connected with us</h3>
            <form>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-info w-full max-w-xs mb-4"
              />

              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-info w-full max-w-xs mb-4"
              />
              <textarea
                class="textarea textarea-accent max-w-xs  w-full mb-4"
                placeholder="Bio"
              ></textarea>
              <div>
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
