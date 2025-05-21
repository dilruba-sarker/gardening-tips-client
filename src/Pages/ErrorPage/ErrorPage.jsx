import React from 'react';
import Lottie from "lottie-react";
import lotti from "../../Animate/404lotti.json"
const ErrorPage = () => {
    return (
        <div className='text-center  bg-green-200'>
            <h1 className='text-4xl font-bold text-red-600 flex  justify-center -mb-8'> An Unexpected Error ! <br /> Found</h1>
            <div className=' w-4/6 mx-auto flex justify-center'><Lottie  animationData={lotti} loop={true} /></div>
        </div>
    );
};

export default ErrorPage;