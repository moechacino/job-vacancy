import { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [isSidebarClicked, setIsSidebarClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [jobForm, setJobForm] = useState({
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
  const [filterInput, setFilterInput] = useState({
    company_city: "",
    company_name: "",
    salary_min: "",
  });
  const [filter, setFilter] = useState({
    company_city: "",
    company_name: "",
    salary_min: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const handleInputJob = (event) => {
    const { name, value } = event.target;
    setJobForm({
      ...jobForm,
      [name]: isNaN(value) ? value : parseInt(value, 10),
    });
  };

  const fetchData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        console.log(res);
        setData([...res.data.data]);
        console.log(data);
      })
      .catch((err) => {
        setError("error fetching data");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmitJob = (event) => {
    event.preventDefault();
    const token = Cookies.get("token");
    console.log(token);
    console.log(jobForm);
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/job-vacancy",
        {
          title: jobForm.title,
          job_description: jobForm.job_description,
          job_qualification: jobForm.job_qualification,
          job_type: jobForm.job_type,
          job_tenure: jobForm.job_tenure,
          job_status: jobForm.job_status,
          company_name: jobForm.company_name,
          company_image_url: jobForm.company_image_url,
          company_city: jobForm.company_city,
          salary_min: jobForm.salary_min,
          salary_max: jobForm.salary_max,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        alert("Upload data berhasil");
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
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
      });
  };

  const handleDelete = (event) => {
    let idJob = parseInt(event.target.value);
    const token = Cookies.get("token");
    console.log(token + "" + idJob);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        fetchData();
      });
  };
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchInput);
  };
  const handleFilterInput = (event) => {
    const { name, value } = event.target;
    setFilterInput({
      ...filterInput,
      [name]: value,
    });
  };
  const handleFilter = (event) => {
    event.preventDefault();
    setFilter(filterInput);
  };

  let state = {
    search,
    setSearch,
    searchInput,
    setSearchInput,
    filterInput,
    setFilterInput,
    filter,
    setFilter,
    isSidebarClicked,
    setIsSidebarClicked,
    jobForm,
    setJobForm,
    loading,
    setLoading,
    error,
    setError,
    data,
    setData,
  };
  let handlerFunction = {
    handleSearch,
    handleSearchInput,
    handleFilterInput,
    handleFilter,
    handleInputJob,
    handleSubmitJob,
    fetchData,
    handleDelete,
  };
  return (
    <GlobalContext.Provider value={{ state, handlerFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
