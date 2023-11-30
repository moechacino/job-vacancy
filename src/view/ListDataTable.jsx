import { useState, useEffect, useContext } from "react";
import NavbarDashboard from "../components/navbar/DashboardNavbar";

import Footer from "../components/footer";
import SidebarMain from "../components/sidebar/Sidebar";
import { GlobalContext } from "../context/GlobalContext";
const ListDataTable = () => {
  const { state, handlerFunction } = useContext(GlobalContext);
  const { search, filter, loading, error, data, fetchStatus, setFetchStatus } =
    state;
  const { fetchData, handleDelete, handleEdit } = handlerFunction;

  useEffect(() => {
    fetchData();
  }, [fetchStatus, setFetchStatus]);
  return (
    <div className="flex-col">
      <div className="z-40 relative">
        <NavbarDashboard />
      </div>
      <div className="flex min-h-screen">
        <SidebarMain />
        <div className={`overflow-x-auto  shadow-md sm:rounded-lg w-full m-4`}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && data && data.length === 0 && (
            <p>No job vacancies available.</p>
          )}
          {!loading && !error && data && data.length > 0 && (
            <table className={`text-sm text-left text-gray-500`}>
              <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Job Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qualification
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Job Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Job Tenure
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Job Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company Image URL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Company City
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary Min
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary Max
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data !== null &&
                  data
                    .filter((data) => {
                      return search.toLocaleLowerCase() === ""
                        ? data
                        : data.title?.toLocaleLowerCase()?.includes(search);
                    })
                    .filter((data) => {
                      return filter === null
                        ? data
                        : data.company_city
                            ?.toLocaleLowerCase()
                            ?.includes(filter.company_city) &&
                            data.company_name
                              ?.toLocaleLowerCase()
                              ?.includes(filter.company_name) &&
                            data.salary_min >=
                              (filter.salary_min === "" ||
                              filter.salary_min === 0
                                ? 0
                                : parseInt(filter.salary_min));
                    })
                    .map((res, index) => {
                      return (
                        <tr
                          key={res.id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4">{res.title}</td>
                          <td className="px-6 py-4">{res.job_description}</td>
                          <td className="px-6 py-4">{res.job_qualification}</td>
                          <td className="px-6 py-4">{res.job_type}</td>
                          <td className="px-6 py-4">{res.job_tenure}</td>
                          <td className="px-6 py-4">
                            {res.job_status === 1 ? "Open" : "Closed"}
                          </td>
                          <td className="px-6 py-4">{res.company_name}</td>
                          <td className="px-6 py-4">{res.company_image_url}</td>
                          <td className="px-6 py-4">{res.company_city}</td>
                          <td className="px-6 py-4">{res.salary_min}</td>
                          <td className="px-6 py-4">{res.salary_max}</td>
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
                              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ListDataTable;
