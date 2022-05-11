import React from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../../assets/icons/google.png";

const SignUp = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="shadow-2xl rounded-2xl p-10">
        <h1 className="text-center font-medium text-2xl mb-6">Sing Up</h1>
        <form>
          <label for="Email" className="font-medium">
            Name
          </label>
          <br />

          <input
            type="text"
            name="name"
            placeholder="Name"
            class="input input-bordered w-full mt-1 mb-4"
          />

          <label for="Email" className="font-medium">
            Email
          </label>
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            class="input input-bordered w-full mt-1 mb-4"
          />
          <label for="password" className="font-medium">
            Password
          </label>

          <input
            type="text"
            name="password"
            placeholder="Type here"
            class="input input-bordered w-full mb-1 "
          />

          <button className="w-full mt-5 bg-accent text-white py-3 rounded-2xl text-xl font-medium">
            Login
          </button>
          <p className="mt-3 text-sm text-center font-medium">
            already have an account?
            <Link to="/login" className="text-secondary ml-2">
              Login
            </Link>
          </p>
        </form>
        <div class="flex w-full items-center justify-center">
          <div class="grid h-px flex-grow card bg-slate-400 rounded-box place-items-center"></div>
          <div class="divider divider-horizontal font-medium">OR</div>
          <div class="grid h-px flex-grow card bg-slate-400 rounded-box place-items-center"></div>
        </div>
        <div>
          <button className="w-full border py-3 border-accent mt-3  rounded-2xl flex justify-center items-center font-medium">
            <img
              className="mr-3"
              style={{ width: "30px" }}
              src={googleIcon}
              alt=""
            />{" "}
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
