import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router';
import { FaBars } from 'react-icons/fa'; // ✅ Import icon

const DashBoardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      
      {/* Main content area */}
      <div className="drawer-content flex flex-col">
        {/* Topbar on small screen */}
        <div className="navbar bg-base-300 lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <FaBars className="text-xl" /> {/* ✅ Hamburger Icon */}
            </label>
          </div>
          <div className="mx-2 px-2 font-bold text-lg">Dashboard</div>
        </div>

        {/* Page content here */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-56 p-4">
          {/* Sidebar links */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard/mytips">My Tips</NavLink></li>
          <li><NavLink to="/dashboard/browswtips">All Tips</NavLink></li>
          <li><NavLink to="/dashboard/gardener">Gardeners</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardLayout;
