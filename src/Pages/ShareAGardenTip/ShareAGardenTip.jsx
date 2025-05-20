

import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const ShareAGardenTip = () => {
const {user}=use(AuthContext)

  const handleform = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const plantType = form.plantType.value;
    const difficulty = form.difficulty.value;
    const description = form.description.value;
    const images = form.images.value;
    const category = form.category.value;
    const availability = form.availability.value;
    

    // console.log({ title, plantType, difficulty, description, images, category, availability});
  
  const newUser={
    name:user.displayName,
    email:user.email,
    title, plantType, difficulty, description, images, category, availability

  }
console.log(newUser)

fetch('http://localhost:3000/tips',{
  method:"POST",
  headers:{
    'content-type': 'application/json'
  },
  body:JSON.stringify(newUser)
})
.then(res=>res.json())
.then(data=>{
  if(data.insertedId){
    Swal.fire("data inserted sucessfully!");
  }
})
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Add Garden Tips now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleform} className="form">
              <label className="label">Title</label>
              <input type="text" name="title" className="input w-full" placeholder="title" />

              <label className="label">Plant Type</label>
              <input type="text" name="plantType" className="input w-full" placeholder="Plant Type" />

              <label className="label">Difficulty Level</label>
              <select name="difficulty" defaultValue="" className="select w-full">
                <option disabled value="">Pick a Level</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <label className="label">Description</label>
              <input type="text" name="description" className="input w-full" placeholder="Description" />

              <label className="label">Images URL</label>
              <input type="text" name="images" className="input w-full" placeholder="Images URL" />

              <label className="label">Category</label>
              <select name="category" defaultValue="" className="select w-full">
                <option disabled value="">Pick a Category</option>
                <option>Composting</option>
                <option>Plant Care</option>
                <option>Vertical Gardening</option>
                <option>Fruit Gardening</option>
                <option>Vegetable Gardening</option>
              </select>

              <label className="label">Availability</label>
              <select name="availability" defaultValue="" className="select w-full">
                <option disabled value="">Pick Availability</option>
                <option>Public</option>
                <option>Hidden</option>
              </select>

              <label className="label">Email</label>
              <input type="text" name="" value="email" readOnly className="input w-full" placeholder="Email" />

              <label className="label">Name</label>
              <input type="text" value="name" readOnly className="input w-full" placeholder="Name" />

              <div className="flex justify-center">
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareAGardenTip;
