import React from "react";
import { useLoaderData } from "react-router";

const ExploreGardeners = () => {
  const data = useLoaderData();


  return (
     <div className="text-center " >
        <h1 className="text-4xl font-bold text-green-500">All Gardeners Profile</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-16 md:ml-1 bg-emerald-200 p-4'>
         {data.map((item) => (
        <div key={item.age} className="card bg-blue-200 w-60 h-64 shadow-sm">
          <figure>
            <img src={item.image} alt="Shoes"  className="w-56 mt-2 h-60 px-4 py-16 rounded-b-lg"/>
          </figure>
          <div className="card-body">
            <div className="badge badge-secondary"> Status: {item.status}</div>
            <h2 className="card-title">
              {item.name}
              
            </h2>
            <h1 className="text-md font-bold">{item.title}</h1>
         
           
            
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default ExploreGardeners;
