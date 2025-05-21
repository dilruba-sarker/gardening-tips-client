import React from "react";
import { useLoaderData } from "react-router";

const ExploreGardeners = () => {
  const data = useLoaderData();
  console.log(data);

  return (
     <div className="text-center " >
        <h1 className="text-4xl font-bold text-green-500">All Gardeners Profile</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-16 md:ml-1 bg-emerald-200 p-4'>
         {data.map((item) => (
        <div key={item.age} className="card bg-blue-200 w-80 h-96 shadow-sm">
          <figure>
            <img src={item.image} alt="Shoes"  className="w-80 h-56"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.status}</div>
            </h2>
            <h1 className="text-md font-bold">{item.title}</h1>
            <p className="font-medium">Experiences: {item.experiences}</p>
            <p className="font-medium text-green-600">totalSharedTips : {item.totalSharedTips}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline bg-green-600 font-semibold text-white">
                Gender:
                {item.gender}
              </div>
              <div className="badge badge-outline bg-green-600 font-semibold text-white">Age: {item.age}</div>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default ExploreGardeners;
