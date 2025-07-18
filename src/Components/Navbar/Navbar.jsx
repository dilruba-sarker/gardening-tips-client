import React, { use, useState } from 'react';
import Darkmode from '../Darkmode/Darkmode';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Tooltip } from 'react-tooltip'
import logo from "../../assets/Borcelle Organic (50 x 50 px) (1).png" 



const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  const links = (
    <>
      <li className='text-xl font-semibold hover:bg-green-400 hover:text-white text-green-500'><NavLink to="/">Home</NavLink></li>
      {user?.email && (
        <>
          <li className='text-xl text-green-500  hover:bg-green-400 hover:text-white font-semibold'><NavLink to="/mytips">My Tips</NavLink></li>
          <li className='text-xl text-green-500  hover:bg-green-400 hover:text-white font-semibold'><NavLink to="/ShareAGardenTip">Share a Garden Tip</NavLink></li>
          <li className='text-xl text-green-500  hover:bg-green-400 hover:text-white font-semibold'><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
      )}
      <li className='text-xl text-green-500  hover:bg-green-400 hover:text-white font-semibold'><NavLink to="/gardeners">Explore Gardeners</NavLink></li>
      <li className='text-xl text-green-500  hover:bg-green-400 hover:text-white font-semibold'><NavLink to="/browswtips">Browse Tips</NavLink></li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(
        () =>
        setShowLogout(false)
      )
      .catch(err => console.log(err.message));
  };

  return (
    <div className="navbar bg-green-200 overflow-x-hidden sticky top-0 z-50 py-8 shadow-sm mb-4 max-w-5xl mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
       
     <Darkmode />
      <div  className='ml-8'>
        <img src={logo} alt="" className=' rounded-full' />
       
        
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user?.email ? (
          <div className="relative flex flex-col items-end">
            {/* Tooltip only on image */}
            <div className="  tooltip tooltip-left" data-tip={user.displayName || 'User'}>
              <img
                onClick={() => setShowLogout(!showLogout)}
                src={user.photoURL || "/default-avatar.png"}
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
              />
            </div>

            {/* Logout Button */}
            {showLogout && (
              <button
                onClick={handleLogout}
               
                 className="absolute right-0 top-full mt-2 btn btn-primary btn-sm z-50"
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/signup"><button className="btn btn-primary">Signup</button></Link>
            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;