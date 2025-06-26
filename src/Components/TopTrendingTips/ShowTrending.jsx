// import React, { use } from 'react';

// const ShowTrending = ({data}) => {
//     const trendData=use(data)
//   const trend=trendData.slice(0,6)
//     return (
        
//              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-16'>
//             {trend.map(tip=><div key={tip._id} className="card bg-base-100 w-72 h-72  shadow-sm">
//   <figure className="py-10 mt-1">
//     <img
//       src={tip.images}
//       alt="Shoes"
//       className="rounded-xl w-64 h-24" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">{tip.title}</h2>
   
//     <p>{tip.description.split(' ').slice(0, 10).join(' ')}...</p>

//     <div className="card-actions">
//       <button className="btn btn-primary">Total Liked: {tip.totalLiked}</button>
//     </div>
//   </div>
// </div>)}
//         </div>
//     );
// };

// export default ShowTrending;

import React, { use, useState } from 'react';
import { Link } from 'react-router';

const ShowTrending = ({ data }) => {
  const trendData = use(data);
  const [showAll, setShowAll] = useState(false); // 👈 state to toggle

  const displayedTips = showAll ? trendData : trendData.slice(0, 6);

  return (
    <div className="text-center">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-16">
        {displayedTips.map((tip) => (
          <div key={tip._id} className="card bg-base-100 w-72 h-72 shadow-sm">
            <figure className="py-10 mt-1">
              <img
                src={tip.images}
                alt={tip.title}
                className="rounded-xl w-64 h-24"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{tip.title}</h2>
              <p>{tip.description.split(' ').slice(0, 6).join(' ')}...</p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  Total Liked: {tip.totalLiked}
                </button>
              
                <Link to={`/details/${tip._id}`}>
                  <button className="btn btn-primary">
                 See More
                </button>
                </Link>
              
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      {trendData.length > 6 && (
        <div className="mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-outline btn-primary"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowTrending;
