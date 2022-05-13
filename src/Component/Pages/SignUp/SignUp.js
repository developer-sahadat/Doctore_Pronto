import React from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/icons/google.png";
import auth from "../../../FirebaseInit/Init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../Shear/Loading/Loading";

const SignUp = () => {
  let navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser, googleLoading, googlError] =
    useSignInWithGoogle(auth);

  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  if (user || googleUser) {
    navigate("/");
  }
  if (loading || googleLoading || updating) {
    return <Loading />;
  }
  let errorMessage;
  if (error || googlError || UpdateError) {
    errorMessage = (
      <p className="text-red-500 text-center">
        {error?.message || googlError?.message}
      </p>
    );
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    event.target.reset();
  };
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="shadow-2xl rounded-2xl p-10">
        <h1 className="text-center font-medium text-2xl mb-6">Sing Up</h1>
        {errorMessage}
        <form onSubmit={submitHandler}>
          <label htmlFor="Email" className="font-medium">
            Name
          </label>
          <br />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full mt-1 mb-4"
          />

          <label htmlFor="Email" className="font-medium">
            Email
          </label>
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full mt-1 mb-4"
          />
          <label htmlFor="password" className="font-medium">
            Password
          </label>

          <input
            type="text"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full mb-1 "
          />

          <button className="w-full mt-5 bg-accent text-white py-3 rounded-2xl text-xl font-medium">
            Sign Up
          </button>
          <p className="mt-3 text-sm text-center font-medium">
            already have an account?
            <Link to="/login" className="text-secondary ml-2">
              Login
            </Link>
          </p>
        </form>
        <div className="flex w-full items-center justify-center">
          <div className="grid h-px flex-grow card bg-slate-400 rounded-box place-items-center"></div>
          <div className="divider divider-horizontal font-medium">OR</div>
          <div className="grid h-px flex-grow card bg-slate-400 rounded-box place-items-center"></div>
        </div>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="w-full border py-3 border-accent mt-3  rounded-2xl flex justify-center items-center font-medium"
          >
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
