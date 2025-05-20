import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGardeners from '../../Components/FeaturedGardeners/FeaturedGardeners';


const Home = () => {
    return (
        <>
        <Banner></Banner>
       <div className='mt-4'>

     
        <FeaturedGardeners></FeaturedGardeners>
       </div>
        </>
       
            
    );
};

export default Home;