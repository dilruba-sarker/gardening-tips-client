import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Context/AuthContext";
import { MdDeleteForever,  MdOutlineEditLocation } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";


const MyTips = () => {
  const { user } = useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-10-11-server.vercel.app/tips?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data));
    }
  }, [user]);

const handleDelete=(id)=>{
    console.log("delete",id);

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

  fetch(`https://assignment-10-11-server.vercel.app/tips/${id}`,{
    method:'DELETE'
  })
        .then((res) => res.json())
        .then((data) => {
if(data.deletedCount>0){
    const remainsData=myTips.filter(tip=>tip._id !==id)
setMyTips(remainsData)
}
        });



    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}
console.log("my tips",)
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">My Garden Tips:{myTips.length}</h2>
 
      <div className="grid grid-cols-1 bg-green-300">
        {myTips.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="text-blue-700">Image</th>
                  <th className="text-blue-700">Title</th>
                  <th className="text-blue-700">category</th >

                  <th className="text-blue-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myTips.map((tip, index) => (
                  <tr key={tip._id || index}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      {" "}
                      ,
                      <img
                        src={tip.images}
                        alt=""
                        className="w-12 h-12 rounded-md"
                      />{" "}
                    </td>
                    <td className="font-bold">{tip.title || "N/A"}</td>
                    <td className="font-bold">{tip.category
|| "N/A"}</td>

                    <td>
                      {/* You can add Edit/Delete buttons here */}
                      <button  
                      onClick={()=>handleDelete(tip._id)}
                      className="text-3xl font-bold mr-2 text-red-800"><MdDeleteForever /></button>
              
                      <Link to={`/update/${tip._id}`}>
                              <button className="text-3xl font-bold text-blue-700"><MdOutlineEditLocation /></button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center text-lg text-gray-500">
            No tips available
          </h1>
        )}
      </div>
    </div>
  );
};

export default MyTips;
