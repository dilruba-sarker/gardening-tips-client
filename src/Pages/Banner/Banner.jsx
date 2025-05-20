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

import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
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

            <div className='absolute bottom-36 left-56 p-8 text-center'>
                <h1 className='text-3xl font-bold text-amber-100 '>Gardening events and shows in 2025</h1>
                <button className=' btn btn-primary text-amber-50'>Get Started</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
            
            <img src={img2} alt="Slide 1" />

            <div className='absolute bottom-36 left-56 p-8 text-center'>
                <h1 className='text-3xl font-bold text-black '>"Plant yourself where you feel most alive — like this garden party!"</h1>
                <button className=' btn btn-primary text-amber-50'>Get Started</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
            
            <img src={img3} alt="Slide 1" />

            <div className='absolute bottom-36 left-42 p-8 text-center'>
                <h1 className='text-3xl font-bold text-white '>"Let’s grow memories together in the garden of friendship."</h1>
                <button className=' btn btn-primary text-amber-50'>Get Started</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
            
            <img src={img4} alt="Slide 1" />

            <div className='absolute bottom-36 left-16 p-8 text-center'>
                <h1 className='text-3xl font-bold text-black '>"We’re digging this garden gathering — come grow with us!"</h1>
                <button className=' btn btn-primary text-amber-50'>Get Started</button>
            </div>
            </SwiperSlide>
        <SwiperSlide className=''>
            
            <img src={img5} alt="Slide 1" />

            <div className='absolute bottom-36 left-16 p-8 text-center'>
                <h1 className='text-3xl font-bold text-white '>"Come into the garden, where time slows and beauty grows!"</h1>
                <button className=' btn btn-primary text-amber-50'>Get Started</button>
            </div>
            </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
