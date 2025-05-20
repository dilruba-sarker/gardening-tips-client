import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const BrowseTips = () => {
  const data = useLoaderData();

  const [difficulty,setDifficulty]=useState('')
  
const filterData= data.filter(tip=>tip.availability === "Public"&&(difficulty===""||tip.difficulty===difficulty))
console.log("filter",filterData)
            
  return (
    <div className="p-4 bg-blue-200 lg:w-5xl mx-auto text-center items-center">
      <h2 className="text-2xl font-bold mb-4">Public Garden Tips</h2>
<div>

    <select value={difficulty} onChange={(e)=>setDifficulty(e.target.value)} className="select">
  <option disabled={true}>Select a Option</option>
  <option value="">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
</select>
</div>

      <div className="overflow-x-hidden">
        <table className="table">
          {/* Table head */}
          <thead>
            <tr>
              <th>Title</th>

              <th>Category</th>
              <th>Image</th>
              <th>difficulty</th>
              <th>See More</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {filterData.map((tip, index) => {
              if (tip.availability === "Public") {
                return (
                  <tr key={tip._id || index}>
                    <td className="font-semibold">{tip.title}</td>

                    <td>{tip.category}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={tip.images}
                            alt={tip.title}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{tip.difficulty}</td>
                    <td>
                      <Link to={`/details/${tip._id}`}>
                        <button className="btn btn-sm btn-info text-2xl">
                          <IoMdEye />
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>

          {/* Table foot */}
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
