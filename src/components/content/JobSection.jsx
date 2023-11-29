const JobSection = ({ job }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-md shadow-md h-full w-full">
      <h2 className="text-xl font-semibold mb-4">{job.title}</h2>
      <p className="text-gray-600 mb-4 w-full max-h-20 overflow-hidden line-clamp-2">
        {job.job_description}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold max-h-20 overflow-hidden line-clamp-3">
          Qualification:
        </span>{" "}
        {job.job_qualification}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Type:</span> {job.job_type}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Tenure:</span> {job.job_tenure}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Status:</span>{" "}
        {job.job_status === 1 ? "Open" : "Closed"}
      </p>
      <div className="flex items-center mb-2">
        <img
          src={job.company_image_url}
          alt={job.company_name}
          className="w-8 h-8 mr-2 rounded-full"
        />
        <p className="text-gray-700">{job.company_name}</p>
      </div>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">City:</span> {job.company_city}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Salary:</span> Rp.{job.salary_min} - Rp.
        {job.salary_max}
      </p>
    </div>
  );
};
export default JobSection;
