import React from 'react';

const ShareAGardenTip = () => {
  return (
    <div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold"> Add Garden Tips now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="form">
          <label className="label">Title</label>
          <input type="text" name="title" className="input w-full"  placeholder="title" />
          <label className="label">Plant Type</label>
          <input type="text" name="plantType" className="input w-full"  placeholder="Plant Type" />

          {/*  */}

          <label className="label">Difficulty Level</label> <br /> 
       <select defaultValue="Pick a color" className="select w-full">
  <option disabled={true}>Pick a Level</option>
  <option>Easy</option>
  <option>Medium</option>
  <option>Hard</option>
</select>
<br />

 <label className="label">Description</label>
          <input type="text" name="description" className="input w-full"  placeholder="Description" />
 <label className="label">Images url</label>
          <input type="text" name="Images" className="input w-full"  placeholder="Images url" />


          {/*  */}
           <label className="label">Category </label> <br /> 
       <select defaultValue="Pick a color" className="select w-full">
  <option disabled={true}>Pick a Category</option>
  <option>Composting</option>
  <option>Plant Care</option>
  <option>Vertical Gardening</option>
  <option>Fruit Gardening</option>
  <option>Vegetable Gardening</option>
</select>
<br />
           <label className="label">Availability </label> <br /> 
       <select defaultValue="Pick Availability" className="select w-full">
  <option disabled={true}>Pick a Category</option>
  <option>Public</option>
  <option> Hidden</option>
  
</select>
<br />
          {/*  */}
          <label className="label">Email</label>
          <input type=""  className="input w-full" value="email" placeholder="Email" />
          <label className="label">Name</label>
          <input type="text"  className="input w-full" value="name" placeholder="name" />
        
          
          <div className='flex justify-center'><button className="btn btn-primary mt-4">Submit</button></div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ShareAGardenTip;