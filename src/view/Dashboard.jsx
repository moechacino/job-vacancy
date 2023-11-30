import NavbarDashboard from "../components/navbar/DashboardNavbar";
import { useState, useEffect } from "react";
import { useContext } from "react";

import Footer from "../components/footer";
import SidebarMain from "../components/sidebar/Sidebar";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state } = useContext(GlobalContext);
  const { search, setSearch, filter, setFilter, fetchStatus, setFetchStatus } =
    state;
  let [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data.data]);
        console.log(res);
      })
      .catch((err) => {
        setError("error fetching data");
        console.log(err);
      })
      .finally(() => setLoading(false));
    setFetchStatus(false);
  }, [search, setSearch, filter, setFilter, fetchStatus, setFetchStatus]);
  const newestJob = () => {
    if (data !== null) {
      const sortedJob = [...data].sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      const latestJob = sortedJob[0];

      return (
        <>
          <h2 className="text-xl font-semibold mb-4">{latestJob.title}</h2>
          <p className="text-gray-600 mb-4 w-full max-h-20 overflow-hidden line-clamp-2">
            {latestJob.job_description}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold max-h-20 overflow-hidden line-clamp-3">
              Qualification:
            </span>{" "}
            {latestJob.job_qualification}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Type:</span> {latestJob.job_type}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Tenure:</span>{" "}
            {latestJob.job_tenure}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Status:</span>{" "}
            {latestJob.job_status === 1 ? "Open" : "Closed"}
          </p>
          <div className="flex items-center mb-2">
            <img
              src={latestJob.company_image_url}
              alt={latestJob.company_name}
              className="w-8 h-8 mr-2 rounded-full"
            />
            <p className="text-gray-700">{latestJob.company_name}</p>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">City:</span>{" "}
            {latestJob.company_city}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Salary:</span> Rp.
            {latestJob.salary_min} - Rp.
            {latestJob.salary_max}
          </p>
        </>
      );
    }
  };
  const jobStatus = () => {
    const amount = data.length;
    const open = data.filter((data) => {
      return data.job_status === 1;
    }).length;
    const closed = data.filter((data) => {
      return data.job_status === 0;
    }).length;
    return (
      <div className="my-auto">
        <div className="flex items-center justify-center text-gray-700 bg-gray-100 my-8 rounded-lg ">
          <div className="vw-50 font-semibold bg-green-300 rounded-lg w-1/4 p-2 text-2xl text-center">
            Amount:
          </div>
          <div className="flex-1 text-center text-4xl">{amount}</div>
        </div>
        <div className="flex items-center justify-center text-gray-700 bg-gray-100 my-8rounded-lg ">
          <div className="font-semibold bg-green-300 rounded-lg w-1/4 p-2 text-2xl text-center">
            Open:
          </div>
          <div className="flex-1 text-center text-4xl">{open}</div>
        </div>
        <div className="flex items-center justify-center text-gray-700 bg-gray-100 my-8 rounded-lg ">
          <div className="font-semibold bg-red-300 rounded-lg w-1/4 p-2 text-2xl text-center">
            Closed:
          </div>
          <div className="flex-1 text-center text-4xl">{closed}</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <NavbarDashboard />
      <div className="flex min-h-screen">
        <SidebarMain />
        <div className="flex-1 p-4">
          <div className="container mx-auto mt-8">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && data && data.length === 0 && (
              <p>No job vacancies available.</p>
            )}
            {!loading && !error && data && data.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
                <div className="flex flex-col bg-white p-6 rounded-md shadow-md h-full w-full">
                  <h2 className="text-xl text-white text-center font-semibold mb-4 bg-gray-700 rounded-lg">
                    Newest Job Vacancy
                  </h2>
                  {newestJob()}
                </div>
                <div className="flex flex-col  bg-white p-6 rounded-md shadow-md h-full w-full">
                  <h2 className="text-xl text-white text-center font-semibold mb-4 bg-gray-700 rounded-lg">
                    Job Vacancy Status
                  </h2>
                  {jobStatus()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
