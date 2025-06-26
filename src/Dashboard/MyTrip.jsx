import React from 'react';
import { useLoaderData } from 'react-router';

const MyTrip = () => {
  const data = useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
        All Gardeners Profile
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="table w-full text-left">
          <thead className="bg-green-100">
            <tr>
              <th className="p-3 text-green-700">Image</th>
              <th className="p-3 text-green-700">Name</th>
              <th className="p-3 text-green-700">Age</th>
              <th className="p-3 text-green-700">Gender</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id || index} className="hover">
                <td className="p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="p-3 font-semibold">{item.name}</td>
                <td className="p-3">{item.age}</td>
                <td className="p-3">
                  <span className="badge badge-outline text-green-700">
                    {item.gender}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTrip;
