import React, { Suspense } from 'react';
import ShowTrending from './ShowTrending';


const data=fetch('http://localhost:3000/tips').then(res=>res.json())

const TopTrendingTips = () => {
    
    return (
        <div className='text-center bg-[#60db14]'>
            <h1 className='text-xl font-bold text-white'>Top Trending Tips</h1>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <ShowTrending data={data}></ShowTrending>
            </Suspense>
        </div>
    );
};

export default TopTrendingTips;