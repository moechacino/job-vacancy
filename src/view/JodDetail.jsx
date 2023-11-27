import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarLandingPage from "../components/navbar/LandingPageNavbar";
import Footer from "../components/footer";

const JobDetail = () => {
  let { idJob } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching job details:", err);
        setError("Error fetching job details");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idJob]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <NavbarLandingPage />
      <div className="flex min-h-screen">
        <div className="flex-1">
          {data && (
            <div className="container m-auto mt-20">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{data.title}</h2>
                <span
                  className={`px-2 py-1 ${
                    data.job_status === 1 ? "bg-green-500" : "bg-red-500"
                  } text-white rounded-md`}
                >
                  {data.job_status === 1 ? "Open" : "Closed"}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">{data.job_description}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Job Details</h3>
                <ul className="list-disc list-inside">
                  <li>Type: {data.job_type}</li>
                  <li>Tenure: {data.job_tenure}</li>
                  <li>Qualification: {data.job_qualification}</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Company Information</h3>
                <div className="flex items-center mt-2">
                  <img
                    src={data.company_image_url}
                    alt={data.company_name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-700">{data.company_name}</p>
                    <p className="text-gray-500">{data.company_city}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Salary</h3>
                <p>{`$${data.salary_min} - $${data.salary_max}`}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
