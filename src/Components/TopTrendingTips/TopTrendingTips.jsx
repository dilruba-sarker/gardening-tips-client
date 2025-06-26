import React, { Suspense } from 'react';
import ShowTrending from './ShowTrending';


const data=fetch('https://assignment-10-11-server.vercel.app/tips').then(res=>res.json())

const TopTrendingTips = () => {
    
    return (
        <div className='text-center py-4 bg-[#60db14]'>
            <h1 className='text-xl font-bold text-white m-4 '>Top Trending Tips</h1>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <ShowTrending data={data}></ShowTrending>
            </Suspense>
        </div>
    );
};

export default TopTrendingTips;