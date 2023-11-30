import NavbarDashboard from "../components/navbar/DashboardNavbar";
import { useState } from "react";
import axios from "axios";
import Footer from "../components/footer";
import SidebarMain from "../components/sidebar/Sidebar";
import Cookies from "js-cookie";
const ChangePassword = () => {
  const [new_confirm_password, setNew_confirm_password] = useState("");
  const [formPassword, setFormPassword] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "new_confirm_password") {
      setNew_confirm_password(e.target.value);
      setFormPassword({ ...formPassword, [e.target.name]: e.target.value });
    } else {
      setFormPassword({ ...formPassword, [e.target.name]: e.target.value });
    }
  };
  const token = Cookies.get("token");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formPassword.current_password.length < 8)
      alert("Kata sandi minimal 8 karakter");
    if (formPassword.new_password.length < 8)
      alert("Kata sandi baru minimal 8 karakter");
    else if (new_confirm_password !== formPassword.new_password)
      alert("Kata sandi baru anda berbeda");
    else {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/change-password",
          {
            current_password: formPassword.current_password,
            new_password: formPassword.new_password,
            new_confirm_password: formPassword.new_confirm_password,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          alert(res.data);
        })
        .catch((err) => {
          alert(err.message);
        })
        .finally(() => {
          setFormPassword({
            current_password: "",
            new_password: "",
            new_confirm_password: "",
          });
          setNew_confirm_password("");
        });
    }
  };
  return (
    <div className="flex-col">
      <div className="z-40 relative">
        <NavbarDashboard />
      </div>
      <div className="flex min-h-screen">
        <SidebarMain />
        <div className="overflow-x-auto md:overflow-scroll md:flex-1 p-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-6xl mx-auto my-2  px-2"
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChange}
                value={formPassword.current_password}
                type="text"
                name="current_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="current_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Current Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChange}
                value={formPassword.new_password}
                type="password"
                name="new_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="new_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                New Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChange}
                value={new_confirm_password}
                type="password"
                name="new_confirm_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="new_confirm_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Retype New Password
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
