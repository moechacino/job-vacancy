import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
const Search = () => {
  const { state, handlerFunction } = useContext(GlobalContext);
  const { searchInput } = state;
  const { handleSearch, handleSearchInput } = handlerFunction;
  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          name="search"
          value={searchInput}
          onChange={handleSearchInput}
          className="bg-gray-50 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Jobs..."
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};
const DropDownElement = () => {
  return (
    <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-white rounded py-2">
      <Link to="/">
        <button className="block px-4 py-2 text-white hover:bg-gray-700">
          Beranda
        </button>
      </Link>
      <Link to="">
        <button className="block px-4 py-2 text-white hover:bg-gray-700">
          Logout
        </button>
      </Link>
    </div>
  );
};

const FilterButton = () => {
  const { state, handlerFunction } = useContext(GlobalContext);
  const { filterInput } = state;
  const { handleFilterInput, handleFilter } = handlerFunction;
  return (
    <form
      onSubmit={handleFilter}
      className="flex flex-col md:flex-row w-full m-0"
    >
      <div className="relative mb-3 md:mb-0 md:mr-2 w-full">
        <input
          onChange={handleFilterInput}
          value={filterInput.company_city}
          type="text"
          name="company_city"
          placeholder="City"
          className="w-full py-2.5 px-3 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
        />
      </div>
      <div className="relative mb-3 md:mb-0 md:mr-2 w-full">
        <input
          value={filterInput.company_name}
          onChange={handleFilterInput}
          name="company_name"
          type="text"
          placeholder="Company"
          className="w-full py-2.5 px-3 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
        />
      </div>
      <div className="relative mb-3 md:mb-0 w-full">
        <input
          value={filterInput.salary_min}
          onChange={handleFilterInput}
          name="salary_min"
          type="text"
          placeholder="Salary"
          className="w-full py-2.5 px-3 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="text-grey-500 bg-white font-medium rounded-lg text-sm w-1/2 px-5 py-2.5 text-center md:ml-2"
      >
        Apply Filter
      </button>
    </form>
  );
};

const NavbarDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 z-[999]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://seeklogo.com/images/P/panda-logo-95DA812E63-seeklogo.com.png"
            className="w-20"
            alt=""
          />
          <span className="text-2xl font-semibold text-white hidden md:inline">
            OrderJob Dashboard
          </span>
          <Search />
          <FilterButton />
        </div>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white border border-white rounded px-4 py-3 focus:outline-none "
          >
            Menu
          </button>
          {isDropdownOpen && <DropDownElement />}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
