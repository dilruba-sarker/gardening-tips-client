import React, { Suspense, useEffect, useState } from 'react';
import Gardeners from '../../Pages/ExploreGardeners/Gardeners';
import { motion } from "framer-motion";
// const gardenersres=fetch('https://assignment-10-11-server.vercel.app/garderners?limit=6').then(res=>res.json())



const FeaturedGardeners = () => {
     const [gardeners, setGardeners] = useState([]);
      useEffect(() => {
    fetch('https://assignment-10-11-server.vercel.app/gardeners?limit=6') 
      .then(res => res.json())
      .then(data => {
        setGardeners(data);
    
      });
  }, []);
    
    return (
        <div className=' text-center mt-4 mb-4'>
           
<motion.div 


 animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 10 }}>
 <h1 className='text-2xl font-bold text-green-600 overflow-x-hidden'>All Active gardenersres</h1>
</motion.div>
            <Gardeners gardeners={gardeners}></Gardeners>
           
          {/* <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
  <Gardeners gardenersres={gardenersres}></Gardeners>
          
          </Suspense> */}
        </div>
    );
};

export default FeaturedGardeners;