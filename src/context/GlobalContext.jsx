import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
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
      ...filter,
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
  };
  let handlerFunction = {
    handleSearch,
    handleSearchInput,
    handleFilterInput,
    handleFilter,
  };
  return (
    <GlobalContext.Provider value={{ state, handlerFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
