import React from 'react';

const ShareAGardenTip = () => {
    return (
        <div className='text-center'>
            <h1>Share AGarden Tip</h1>

            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="form">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShareAGardenTip;