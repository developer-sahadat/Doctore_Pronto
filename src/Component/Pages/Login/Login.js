import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/icons/google.png";
import auth from "../../../FirebaseInit/Init";
import useToken from "../../../Hook/useToken";
import Loading from "../../Shear/Loading/Loading";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googlError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, ResetError] =
    useSendPasswordResetEmail(auth);
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || googleUser);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

  if (loading || googleLoading || sending) {
    return <Loading />;
  }
  let errorMessage;
  if (error || googlError || ResetError) {
    errorMessage = (
      <p className="text-red-500 text-center">
        {error?.message || googlError?.message || ResetError?.message}
      </p>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="shadow-2xl rounded-2xl p-10">
        <h1 className="text-center font-medium text-2xl mb-6">Login</h1>
        {errorMessage}
        <form onSubmit={submitHandler}>
          <label htmlFor="Email" className="font-medium">
            Email
          </label>
          <br />

          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Email"
            className="input input-bordered w-full mt-1 mb-4"
          />
          <label htmlFor="password" className="font-medium">
            Password
          </label>

          <input
            type="text"
            ref={passwordRef}
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full mb-1 "
          />
          <p
            onClick={async () =>
              await sendPasswordResetEmail(emailRef.current.value)
            }
            className="mb-5 text-sm font-medium cursor-pointer"
          >
            Forgot Password ?
          </p>
          <button className="w-full bg-accent text-white py-3 rounded-2xl text-xl font-medium">
            Login
          </button>
          <p className="mt-3 text-sm text-center font-medium">
            New to Doctor Pronto?
            <Link to="/sign-up" className="text-secondary ml-2">
              Create new account
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
            />
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
