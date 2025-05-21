import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router";

const UpdateTip = () => {
  const tips = useLoaderData();

  const {
    _id,
    name,
    email,
    title,
    plantType,
    difficulty,
    description,
    images,
    category,
    availability,
  } = tips;
  const handleUpdate = (e) => {
    e.preventDefault()


      const form = e.target;
    const title = form.title.value;
    const plantType = form.plantType.value;
    const difficulty = form.difficulty.value;
    const description = form.description.value;
    const images = form.images.value;
    const category = form.category.value;
    const availability = form.availability.value;
     const updateUser={
   
    
    title, plantType, difficulty, description, images, category, availability

  }

 fetch(`http://localhost:3000/tips/${_id}`,{
    method:"PUT",
      headers:{
  'content-type':"application/json"
},
body:JSON.stringify(updateUser)
 })
 .then(res=>res.json())
 .then(data=>{
    if(data.modifiedCount>0){
toast.success('Successfully updated data!')
    }
  
 })
  };
  return (
    <div>
   
<Toaster/>
      <div className="hero bg-green-300 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-green-700">Update Garden Tips now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleUpdate} className="form">
                <label className="label">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  className="input w-full"
                  placeholder="title"
                />

                <label className="label">Plant Type</label>
                <input
                  type="text"
                  name="plantType"
                  defaultValue={plantType}
                  className="input w-full"
                  placeholder="Plant Type"
                />

                <label className="label">Difficulty Level</label>
                <select
                  name="difficulty"
                  defaultValue={ difficulty}
                  className="select w-full"
                >
                  <option disabled value="">
                    Pick a Level
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>

                <label className="label">Description</label>
                <input
                  type="text"
                  defaultValue={description}
                  name="description"
                  className="input w-full"
                  placeholder="Description"
                />

                <label className="label">Images URL</label>
                <input
                  type="text"
                  name="images"
                  className="input w-full"
                  placeholder="Images URL"
                  defaultValue={images}
                />

                <label className="label">Category</label>
                <select
                  name="category"
                  defaultValue={category}
                  className="select w-full"
                >
                  <option disabled value="">
                    Pick a Category
                  </option>
                  <option>Composting</option>
                  <option>Plant Care</option>
                  <option>Vertical Gardening</option>
                  <option>Fruit Gardening</option>
                  <option>Vegetable Gardening</option>
                </select>

                <label className="label">Availability</label>
                <select
                  name="availability"
                  defaultValue={availability}
                  className="select w-full"
                >
                  <option disabled value="">
                    Pick Availability
                  </option>
                  <option>Public</option>
                  <option>Hidden</option>
                </select>

                <label className="label">Email</label>
                <input
                  type="text"
                  name=""
                  value={email}
                  readOnly
                  className="input w-full"
                  placeholder="Email"
                />

                <label className="label">Name</label>
                <input
                  type="text"
                  value={name}
                  readOnly
                  className="input w-full"
                  placeholder="Name"
                />

                <div className="flex justify-center">
                  <button type="submit" className="btn bg-green-400 text-red-600 mt-4">
                  Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTip;
