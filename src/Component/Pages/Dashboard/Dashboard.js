import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-3 lg:p-10 bg-slate-100 rounded-md ">
          <div>
            <h1 className="text-2xl font-bold mb-5">My Appointment</h1>
            <Outlet />
          </div>
          {/* <!-- Page content here --> */}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
