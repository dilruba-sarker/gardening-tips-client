import React, { Suspense } from 'react';
import Gardeners from '../../Pages/ExploreGardeners/Gardeners';

const gardenersres=fetch('http://localhost:3000/garderners').then(res=>res.json())



const FeaturedGardeners = () => {
    
    return (
        <div className=' text-center'>
            <h1 className='text-2xl font-bold text-green-600'>All Active gardenersres</h1>
           
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
  <Gardeners gardenersres={gardenersres}></Gardeners>
          
          </Suspense>
        </div>
    );
};

export default FeaturedGardeners;