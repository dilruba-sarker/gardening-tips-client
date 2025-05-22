// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// // import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay  } from 'swiper/modules';



// import img1 from '../../assets/1.png'
// import img2 from '../../assets/2.png'
// import img3 from '../../assets/3.png'
// import img4 from '../../assets/4.png'
// import img5 from '../../assets/5.png'

// const Banner = () => {
//     return (
//        <>
//       <Swiper
//         cssMode={true}
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//       autoplay={{
//           delay: 3000, // time in ms between slides
//           disableOnInteraction: false, // keeps autoplay after user interaction
//         }}
        
//         keyboard={true}
//           modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//             <img src={img1} alt="" srcset="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={img2} alt="" srcset="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={img3} alt="" srcset="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={img4} alt="" srcset="" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={img5} alt="" srcset="" />
//         </SwiperSlide>
        
        
//       </Swiper>
//     </>
//     );
// };

// export default Banner;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

import img1 from '../../assets/gar.png'
import img2 from '../../assets/Untitled design (2).png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/soil.png'
import img5 from '../../assets/5.png'

const Banner = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 5000, // time in ms between slides
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
            
            <img src={img1} alt="Slide 1" />

             <div className='absolute bottom-2 md:bottom-36 left-2 md:left-56 p-8 text-center'>
              <h1 className='text-sm md:text-3xl font-bold text-white bg-green-500'>Gardening events and shows in 2025</h1>
                <button className=' btn bg-green-400 text-xl font-bold mt-2 text-amber-50'>Get Started</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className='w-5xl'>
            
            <img src={img2} alt="Slide 1" className='' />

            <div className='absolute bottom-2 md:bottom-36 left-2 md:left-56 p-8 text-center'>
                <h1 className='text-sm md:text-3xl font-bold text-white bg-green-500'>"Plant yourself where you feel most alive — like this garden party!"</h1>
                <button className=' btn bg-green-400 text-amber-50 mt-4 text-xl font-bold'>50% Off! Join Now!</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
            
            <img src={img3} alt="Slide 1" />

            <div className='absolute bottom-2 md:bottom-36 left-2 md:left-56 p-8 text-center'>
                <h1 className='text-sm md:text-3xl font-bold text-green-400 bg-red-200'>"Let’s grow memories together in the garden of friendship.!Events in Dhaka"</h1>
<button className=' btn bg-green-400 text-amber-50 mt-4 text-xl font-bold'>let's Started!</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
            
            <img src={img4} alt="Slide 1" className='max-w-5.3xl' />

   <div className='absolute bottom-2 md:bottom-36 left-2 md:left-56 p-8 text-center'>
                <h1 className='text-sm md:text-3xl font-bold text-white '>"We’re digging this garden gathering — come grow with us! In Bangladesh!"</h1>
                <button className=' btn bg-green-400 text-amber-50 mt-4 text-xl font-bold'>Free Seminer</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
            
            <img src={img5} alt="Slide 1" />

             <div className='absolute bottom-2 md:bottom-36 left-2 md:left-56 p-8 text-center'>
                <h1 className='text-sm md:text-3xl font-bold text-white '>"Workshow on Green Gardening !Come into the garden, where time slows and beauty grows!"</h1>
                                <button className=' btn bg-green-400 text-amber-50 mt-4 text-xl font-bold'>60% Discount !</button>
            </div>
            </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
