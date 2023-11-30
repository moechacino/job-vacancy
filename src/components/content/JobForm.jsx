import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
const JobForm = () => {
  const { state, handlerFunction } = useContext(GlobalContext);
  const { jobForm, setJobForm, currentId, setCurrentId } = state;
  const { handleInputJob, handleSubmitJob } = handlerFunction;
  const location = useLocation();
  const currentPath = location.pathname;
  const { idJob } = useParams();
  const headingHandler = () => {
    if (currentPath === "/dashboard/list-job-vacancy/create")
      return "Tambah Data Pekerjaan";
    else if (currentPath.startsWith("/dashboard/list-job-vacancy/edit/"))
      return "Update Data Pekerjaan";
  };
  useEffect(() => {
    if (idJob !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`)
        .then((res) => {
          let data = res.data;
          setJobForm({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        })
        .catch((err) => alert("data not found"));
    } else {
      setCurrentId(-1);
      setJobForm({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 0,
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: 0,
        salary_max: 0,
      });
    }
  }, [idJob]);

  return (
    <div className="w-3/4 text-black mx-auto mt-5 p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">{headingHandler()}</h2>
      <form onSubmit={handleSubmitJob}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobForm.title}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job_description" className="block font-bold">
            Job Description:
          </label>
          <textarea
            id="job_description"
            name="job_description"
            value={jobForm.job_description}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job_qualification" className="block font-bold">
            Job Qualification:
          </label>
          <input
            type="text"
            id="job_qualification"
            name="job_qualification"
            value={jobForm.job_qualification}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job_type" className="block font-bold">
            Job Type:
          </label>
          <input
            type="text"
            id="job_type"
            name="job_type"
            value={jobForm.job_type}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job_tenure" className="block font-bold">
            Job Tenure:
          </label>
          <input
            type="text"
            id="job_tenure"
            name="job_tenure"
            value={jobForm.job_tenure}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job_status" className="block font-bold">
            Job Status:
          </label>
          <select
            id="job_status"
            name="job_status"
            value={jobForm.job_status}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          >
            <option value={0}>Closed</option>
            <option value={1}>Open</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="company_name" className="block font-bold">
            Company Name:
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={jobForm.company_name}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company_image_url" className="block font-bold">
            Company Image URL:
          </label>
          <input
            type="text"
            id="company_image_url"
            name="company_image_url"
            value={jobForm.company_image_url}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company_city" className="block font-bold">
            Company City:
          </label>
          <input
            type="text"
            id="company_city"
            name="company_city"
            value={jobForm.company_city}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary_min" className="block font-bold">
            Salary Min:
          </label>
          <input
            type="number"
            id="salary_min"
            name="salary_min"
            value={jobForm.salary_min}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary_max" className="block font-bold">
            Salary Max:
          </label>
          <input
            type="number"
            id="salary_max"
            name="salary_max"
            value={jobForm.salary_max}
            onChange={handleInputJob}
            className="border p-2 w-full rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobForm;
