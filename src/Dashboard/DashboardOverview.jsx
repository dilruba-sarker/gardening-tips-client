
 import { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData } from 'react-router';

const DashboardOverview = () => {
   const { user } = use(AuthContext);
 const tips = useLoaderData()
  const totalTips = tips?.length || 0
     const [myTips, setMyTips] = useState([]);
   
     useEffect(() => {
       if (user?.email) {
         fetch(`https://assignment-10-11-server.vercel.app/tips?email=${user.email}`)
           .then((res) => res.json())
           .then((data) => setMyTips(data));
       }
     }, [user]);
    return (
        <div>
          <h1 className='text-3xl mb-4 font-bold text-green-400'>Welcome Back!</h1>
          

<div className='flex flex-col lg:flex-row gap-4'>
<div className="card bg-green-200 -content w-96">
  <div className="card-body">
    <h2 className="card-title">All Gardeners Profile!</h2>
    <p className='font-bold '>Total Gardeners:10</p>
    <p className='text-bold ' >Active Gardeners:06</p>
    <p className='text-bold'>Inactive Gardeners:04</p>

  </div>
</div>
<div className="card w-96 bg-base-100  shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Logged In user</h2>
       <div className='flex gap-4'>
        <img className='rounded-full bg-green-500 w-16' src={user.photoURL} alt="" />
        <div> <h1 className='text-xl font-bold'>{user.displayName}</h1>
     <h1>{user.email}</h1></div>
        </div>
    <div>
    
    </div>
 
  </div>
</div>
</div>

.....................
<div className='flex flex-col lg:flex-row gap-4'>
<div className="card bg-green-200 -content w-96">
  <div className="card-body">
    <h2 className="card-title">All Gardenering Tips!</h2>
    <p className='font-bold '>Total Gardenering Tips:{totalTips}</p>
    <p className='text-bold ' >Here Some Hard tips</p>
    <p className='text-bold ' >Here Some Easy tips</p>
   

  </div>
</div>
<div className="card w-96 bg-base-100  shadow-sm">
  <div className="card-body">
    <h2 className="card-title">My Added Garden Tips:</h2>
       <div className='flex gap-4'>
       
        <div> <h1 className='text-xl font-bold'>Total Added Tips: {myTips.length}</h1>

     </div>
        </div>
    <div>
    
    </div>
 
  </div>
</div>
</div>
        </div>
    );
};

 export default DashboardOverview;



