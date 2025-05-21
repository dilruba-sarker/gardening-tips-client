import React, { Suspense, useEffect, useState } from 'react';
import Gardeners from '../../Pages/ExploreGardeners/Gardeners';

// const gardenersres=fetch('http://localhost:3000/garderners?limit=6').then(res=>res.json())



const FeaturedGardeners = () => {
     const [gardeners, setGardeners] = useState([]);
      useEffect(() => {
    fetch('http://localhost:3000/gardeners?limit=6') 
      .then(res => res.json())
      .then(data => {
        setGardeners(data);
    
      });
  }, []);
    
    return (
        <div className=' text-center'>
            <h1 className='text-2xl font-bold text-green-600'>All Active gardenersres</h1>

            <Gardeners gardeners={gardeners}></Gardeners>
           
          {/* <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
  <Gardeners gardenersres={gardenersres}></Gardeners>
          
          </Suspense> */}
        </div>
    );
};

export default FeaturedGardeners;