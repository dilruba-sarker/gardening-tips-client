import React, { use, useState } from 'react';
import Darkmode from '../Darkmode/Darkmode';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { Tooltip } from 'react-tooltip'

// const Navbar = () => {
//   const { user, logOut } = use(AuthContext);
//   const [showLogout, setShowLogout] = useState(false);

//   const links = (
//     <>
//       <li className='text-md font-semibold'><NavLink to="/">Home</NavLink></li>
//       {user?.email && (
//         <>
//           <li className='text-md font-semibold'><NavLink to="/mytips">My Tips</NavLink></li>
//           <li className='text-md font-semibold'><NavLink to="/ShareAGardenTip">Share a Garden Tip</NavLink></li>
//         </>
//       )}
//       <li className='text-md font-semibold'><NavLink to="/gardeners">Explore Gardeners</NavLink></li>
//     </>
//   );

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         console.log("Logged out successfully");
//         setShowLogout(false);
//       })
//       .catch(err => console.error("Logout error:", err.message));
//   };

//   // Close logout button when clicking anywhere else
//   const handleClickOutside = (e) => {
//     if (!e.target.closest('.user-photo-container')) {
//       setShowLogout(false);
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//               viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round"
//                 strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
//             {links}
//           </ul>
//         </div>
//         <Darkmode />
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       <div className="navbar-end">
//         {user?.email ? (
//           <div className="user-photo-container relative">
//             {/* User photo with hover tooltip and click handler */}
//             <img
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setShowLogout(!showLogout);
//               }}
//               src={user.photoURL || "/default-avatar.png"}
//               alt="User profile"
//               className="w-8 h-8 rounded-full cursor-pointer border border-gray-300"
//               data-tooltip-id="user-tooltip"
//               data-tooltip-content={user.displayName || 'User'}
//             />
//             <Tooltip id="user-tooltip" />
            
//             {/* Logout button that appears on photo click */}
//             {showLogout && (
//               <button
//                 onClick={handleLogout}
//                 className="absolute right-0 top-full mt-2 btn btn-primary btn-sm z-50"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="flex gap-2">
//             <Link to="/signup"><button className="btn btn-primary">Signup</button></Link>
//             <Link to="/login"><button className="btn btn-primary">Login</button></Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  const links = (
    <>
      <li className='text-md font-semibold'><NavLink to="/">Home</NavLink></li>
      {user?.email && (
        <>
          <li className='text-md font-semibold'><NavLink to="/mytips">My Tips</NavLink></li>
          <li className='text-md font-semibold'><NavLink to="/ShareAGardenTip">Share a Garden Tip</NavLink></li>
        </>
      )}
      <li className='text-md font-semibold'><NavLink to="/gardeners">Explore Gardeners</NavLink></li>
      <li className='text-md font-semibold'><NavLink to="/browswtips">Browse Tips</NavLink></li>
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
    <div className="navbar bg-base-100 shadow-sm mb-4">
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