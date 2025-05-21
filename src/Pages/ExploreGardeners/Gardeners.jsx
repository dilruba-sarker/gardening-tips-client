

// import React, { use } from 'react';

const Gardeners = ({ gardeners }) => {
  // const data = use(gardenersres); 

  return (
    <div>
      <h1 className='text-xl font-bold'>Total Active Garddeners: {gardeners.length}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-16'>
        {gardeners.map(item =>
          item.status === "active" ? (

            <div key={item._id} className="card bg-green-300 w-72 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">

    <h1 className='text-xl font-medium' key={item.name}
            >{item.name}</h1>
    <h1>{item.title}</h1>
    <div className="card-actions">
      <button className="btn btn-primary">{item.status}</button>
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
