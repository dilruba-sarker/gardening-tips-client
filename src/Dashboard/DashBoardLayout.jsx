import React from 'react';

import { Outlet } from 'react-router';

import { NavLink } from 'react-router';

const DashBoardLayout = () => {
    return (

        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
    
     <div className="navbar bg-base-300 lg:hidden ">
      <div className="flex-none ">
        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
        
        </label>
      </div>
      <div className="mx-2  px-2">Dashboard</div>
      
    </div>
    {/* Page content here */}
   <Outlet></Outlet>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-56 p-4">
      {/* Sidebar content here */}

      <li>
    <NavLink to="/">
    
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/dashboard/mytips">
 
      My Tips
    </NavLink>
  </li>
  <li>
    <NavLink to="/dashboard/browswtips">
 
      Brows Tips
    </NavLink>
  </li>
 
  
 
    </ul>
  </div>
</div>

    );
};

export default DashBoardLayout;