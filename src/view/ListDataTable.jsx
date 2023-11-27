import { useState, useEffect } from "react";
import axios from "axios";

import NavbarDashboard from "../components/navbar/DashboardNavbar";

import Footer from "../components/footer";
import SidebarMain from "../components/sidebar/Sidebar";
const ListDataTable = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data]);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <NavbarDashboard />
      <div className="flex min-h-screen">
        <SidebarMain />
        <div className="flex-1 p-4">
          <h1>This is list data table</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ListDataTable;
/*
<div>
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-white uppercase bg-grey-500 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Nama
        </th>
        <th scope="col" className="px-6 py-3">
          mata kuliah
        </th>
        <th scope="col" className="px-6 py-3">
          nilai
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          index nilai
        </th>
        <th scope="col" className="px-6 py-3 text-center">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {data !== null &&
        data.map((res, index) => {
          return (
            <tr
              key={res.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{res.name}</td>
              <td className="px-6 py-4">{res.course}</td>
              <td className="px-6 py-4">{res.score}</td>
              <td className="px-6 py-4 text-center">
                {handleIndexScore(res.score)}
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={handleEdit}
                  value={res.id}
                  type="button"
                  className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  value={res.id}
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
    </tbody>
  </table>
</div>;

*/
