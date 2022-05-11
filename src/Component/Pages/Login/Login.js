import React from "react";
import googleIcon from "../../../assets/icons/google.png";

const Login = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="shadow-2xl rounded-2xl p-10">
        <h1 className="text-center font-medium text-2xl mb-6">Login</h1>
        <form>
          <label for="Email" className="font-medium">
            Email
          </label>
          <br />

          <input
            type="email"
            placeholder="Email"
            class="input input-bordered w-full mt-1 mb-4"
          />
          <label for="password" className="font-medium">
            Password
          </label>

          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full mb-1 "
          />
          <p className="mb-5 text-sm font-medium cursor-pointer">
            Forgot Password ?
          </p>
          <button className="w-full bg-accent text-white py-3 rounded-2xl text-xl font-medium">
            Login
          </button>
          <p className="mt-3 text-sm text-center font-medium">
            New to Doctor Pronto?{" "}
            <span className="text-secondary">Create new account</span>
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

export default Login;
