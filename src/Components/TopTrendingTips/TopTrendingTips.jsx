import React, { Suspense } from 'react';
import ShowTrending from './ShowTrending';


const data=fetch('http://localhost:3000/tips').then(res=>res.json())

const TopTrendingTips = () => {
    
    return (
        <div>
            <h1>Top Trending Tips</h1>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <ShowTrending data={data}></ShowTrending>
            </Suspense>
        </div>
    );
};

export default TopTrendingTips;