import React from 'react';
import { BiSolidLike } from 'react-icons/bi';

import { useLoaderData } from 'react-router';

const TipDetails = () => {

    const singleData =useLoaderData()
    


    const {_id,
  name,
  email,
  title,
  plantType,
  difficulty,
  description,
  images,
  category,
  availability}=singleData

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                
  <div className="hero-content flex-col lg:flex-row md:gap-22">
    
    <img
      src={images}
      className="max-w-sm h-96 rounded-lg shadow-2xl "
    />
    <div>

          <button className="btn btn-primary text-4xl font-bold text-amber-600"><BiSolidLike /></button>
      <h1 className="text-xl font-bold">{title}</h1>
   
  

      <h1 className=" text-md font-bold"> Plant Type {plantType}</h1>
      <h1 className="text-xl"> Difficulty : {difficulty}</h1>
      <h1 className="text-xl"> Category : {category}</h1>
      <h1 className="text-xl text-green-600"> Availability : {availability}</h1>
      <p className="py-6">
        {description}
      </p>
      <h1 className='text-2xl font-bold text-blue-700'>Owner:</h1>
         <h1 className="text-md font-bold">{name} !</h1>
      <h1 className="">{email}</h1>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default TipDetails;