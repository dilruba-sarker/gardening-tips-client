import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGardeners from '../../Components/FeaturedGardeners/FeaturedGardeners';
import TopTrendingTips from '../../Components/TopTrendingTips/TopTrendingTips';


const Home = () => {
    return (
        <>
        <Banner></Banner>
       <div className='mt-4 mb-4'>

     
        <FeaturedGardeners></FeaturedGardeners>
       </div>
       <div>
<TopTrendingTips></TopTrendingTips>
       </div>
        </>
       
            
    );
};

export default Home;