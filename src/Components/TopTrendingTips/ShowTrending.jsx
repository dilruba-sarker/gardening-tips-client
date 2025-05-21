import React, { use } from 'react';

const ShowTrending = ({data}) => {
    const trendData=use(data)
  const trend=trendData.slice(0,6)
    return (
        
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-16'>
            {trend.map(tip=><div key={tip._id} className="card bg-base-100 w-72 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={tip.images}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{tip.title}</h2>
    <p>{tip.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Total Liked: {tip.totalLiked}</button>
    </div>
  </div>
</div>)}
        </div>
    );
};

export default ShowTrending;