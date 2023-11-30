import JobSection from "./JobSection";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const LandingPageContent = () => {
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
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Job Vacancies</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && data && data.length === 0 && (
        <p>No job vacancies available.</p>
      )}
      {!loading && !error && data && data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4">
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
                        (filter.salary_min === "" || filter.salary_min === 0
                          ? 0
                          : parseInt(filter.salary_min));
              })
              .map((data, index) => {
                return (
                  <Link key={index} to={`/job-vacancy/${data.id}`}>
                    <JobSection job={data} />
                  </Link>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default LandingPageContent;
