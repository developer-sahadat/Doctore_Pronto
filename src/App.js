import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import About from "./Component/Pages/About/About";
import Appointment from "./Component/Pages/Appointment/Appointment";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import Login from "./Component/Pages/Login/Login";
import Reviews from "./Component/Pages/Reviews/Reviews";
import SignUp from "./Component/Pages/SignUp/SignUp";
import Header from "./Component/Shear/Header/Header";
import RequireAuth from "./RequireAuth/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Component/Pages/Dashboard/Dashboard";
import MyAppointment from "./Component/Pages/MyAppointment/MyAppointment";
import MyReview from "./Component/Pages/Dashboard/MyReview";
import Users from "./Component/Pages/Dashboard/Users";
import RequireAdmin from "./RequireAdmin/RequireAdmin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="my-review" element={<MyReview />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
