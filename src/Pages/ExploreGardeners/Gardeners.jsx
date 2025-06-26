

// import React, { use } from 'react';

import { Link } from "react-router";

const Gardeners = ({ gardeners }) => {
  // const data = use(gardenersres); 

  return (
    <div className="flex justify-center">
     

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {gardeners.map(item =>
          item.status === "active" ? (

            <div key={item._id} className="card bg-[#60db14] w-60 h-64 shadow-sm">
  <figure className="mt-2">
    <img
      src={item.image}
      alt="gargeners"
      className=" w-56 mt-2 h-60 px-4 py-16 rounded-b-lg " />
  </figure>
  <div className="card-body items-center text-center">

    <h1 className='text-xl font-medium' key={item.name}
            >{item.name}</h1>
    <h1>{item.title}</h1>
    <div className="card-actions">
      <Link to="/gardeners">
      <button className="btn text-[#3a8c07] bg-white text-2xl font-bold ">{item.status}</button></Link>
    </div>
  </div>
</div>
            
          ) : null
        )}
      </div>
    </div>
  );
};

export default Gardeners;
