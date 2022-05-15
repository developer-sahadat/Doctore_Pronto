import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../FirebaseInit/Init";
import useAdmin from "../../../Hook/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-3 lg:p-10 bg-slate-100 rounded-md ">
          <div>
            <Outlet />
          </div>
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/my-review">My Review</Link>
            </li>
            <li>{admin && <Link to="/dashboard/users">Users</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
