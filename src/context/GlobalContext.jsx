import { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate();
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
  const [fetchStatus, setFetchStatus] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [currentId, setCurrentId] = useState(-1);
  const handleInputJob = (event) => {
    const { name, value } = event.target;
    setJobForm({
      ...jobForm,
      [name]: value === "" ? "" : isNaN(value) ? value : parseInt(value),
    });
  };

  const fetchData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((err) => {
        setError("error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
    setFetchStatus(false);
  };
  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("userEmail");
    Cookies.remove("userName");
    Cookies.remove("userImage");
    Cookies.remove("userId");
    alert("Berhasil Logout");
    navigate("/login");
  };
  const handleSubmitJob = (event) => {
    event.preventDefault();
    const token = Cookies.get("token");
    const {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = jobForm;
    if (currentId === -1) {
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
        })
        .catch((err) => alert("Upload data gagal"))
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
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          alert(`Update Data Pekerjaan id: ${currentId}`);
        })
        .catch((err) => {
          alert("gagal update");
        })
        .finally(() => {
          setCurrentId(-1);
          navigate("/dashboard/list-job-vacancy");
          setFetchStatus(true);
        });
    }
  };

  const handleDelete = (event) => {
    let idJob = parseInt(event.target.value);
    const token = Cookies.get("token");

    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setFetchStatus(true);
      });
  };
  const handleEdit = (event) => {
    let idJob = parseInt(event.target.value);
    setCurrentId(idJob);
    navigate(`/dashboard/list-job-vacancy/edit/${idJob}`);
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
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
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
    handleEdit,
    logoutHandler,
  };
  return (
    <GlobalContext.Provider value={{ state, handlerFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
