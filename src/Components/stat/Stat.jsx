
// import { useEffect } from 'react';
// import './stat.css'

// import { useMotionValue, motion, animate } from "motion/react"
// const Stat = () => {
//      const count = useMotionValue(0)
//        useEffect(() => {
//     const controls = animate(count, 100, { duration: 5 })
//     return () => controls.stop()
//   }, [count])
//   const text = {
//     fontSize: 64,
//     color: "#8df0cc",
// }
//     return (
//        <div className='flex justify-center stat mt-4 items-center '>
//          <div  className='grid grid-cols-1 md:grid-cols-4  gap-12'>
 


//             <div className='hover:bg-[#71db40]'>
//                 <h1 className='text-4xl font-bold'>🧕</h1>
//                 <motion.h1 style={text} className='text-2xl font-bold text-black'>2500</motion.h1>
//                 <h1 className='text-xl font-bold text-black'>Happy Clients </h1>
//             </div>
//               <div className='hover:bg-[#71db40]'>
//                  <h1 className='text-4xl font-bold'>🌾</h1>
//             <h1 className='text-2xl font-bold text-black'>500</h1>
//                <h1 className='text-xl font-bold text-black'>Projects Done </h1>
//             </div>
//               <div className='hover:bg-[#71db40]'>
//                   <h1 className='text-4xl font-bold'>🥇</h1>
//               <h1 className='text-2xl font-bold text-black'>900</h1>
//                <h1 className='text-xl font-bold text-black'>Awards Winers </h1>
//             </div>
//             <div>
//                   <h1 className='text-4xl font-bold'>🧗</h1>
//                 <h1 className='text-2xl font-bold text-black'>1500</h1>
//               <h1 className='text-xl font-bold text-black'>Our Workers </h1>
//             </div>
            
//         </div>
//        </div>
//     );
// };

// export default Stat;

import React, { useEffect, useState } from 'react';
import { useMotionValue, animate } from 'motion/react';
import './stat.css';

const AnimatedCounter = ({ target }) => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 8 });

    const unsubscribe = count.on('change', (latest) => {
      setDisplayCount(Math.round(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, target]);

  return <h1 className="text-2xl font-bold text-black">{displayCount}</h1>;
};

const Stat = () => {
  return (
    <div className="flex justify-center stat mt-4 items-center">
      <div className="flex justify-between">
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-12"> */}
        <div className="hover:bg-[#71db40] p-4 text-center transition-all duration-300 rounded-xl">
          <h1 className="text-4xl font-bold">🧕</h1>
          <AnimatedCounter target={2500} />
          <h1 className="text-xl font-bold text-black">Happy Clients</h1>
        </div>

        <div className="hover:bg-[#71db40] p-4 text-center transition-all duration-300 rounded-xl">
          <h1 className="text-4xl font-bold">🌾</h1>
          <AnimatedCounter target={500} />
          <h1 className="text-xl font-bold text-black">Projects Done</h1>
        </div>

        <div className="hover:bg-[#71db40] p-4 text-center transition-all duration-300 rounded-xl">
          <h1 className="text-4xl font-bold">🥇</h1>
          <AnimatedCounter target={900} />
          <h1 className="text-xl font-bold text-black">Awards Winners</h1>
        </div>

        <div className="hover:bg-[#71db40] p-4 text-center transition-all duration-300 rounded-xl">
          <h1 className="text-4xl font-bold">🧗</h1>
          <AnimatedCounter target={1500} />
          <h1 className="text-xl font-bold text-black">Our Workers</h1>
        </div>
      </div>
    </div>
  );
};

export default Stat;
