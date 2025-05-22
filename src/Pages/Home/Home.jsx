import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedGardeners from '../../Components/FeaturedGardeners/FeaturedGardeners';
import TopTrendingTips from '../../Components/TopTrendingTips/TopTrendingTips';
import Stat from '../../Components/stat/Stat';
import Newsletter from '../Newsletter/Newsletter';


const Home = () => {
    return (
        <>
        <div className=''>
            <Banner></Banner>
        </div>
       <div className=''>

     
        <FeaturedGardeners></FeaturedGardeners>
       </div>
       <div>
<TopTrendingTips></TopTrendingTips>
       </div>

       <div className=''>
        <Stat></Stat>
       </div>
       <div className=''>
        <Newsletter></Newsletter>
       </div>
        </>
       
            
    );
};

export default Home;