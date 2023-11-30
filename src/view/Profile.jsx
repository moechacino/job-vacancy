import NavbarDashboard from "../components/navbar/DashboardNavbar";
import Cookies from "js-cookie";
import Footer from "../components/footer";
import SidebarMain from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
const Profile = () => {
  const notfound =
    "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
  const imagehandle = () => {
    if (Cookies.get("userImage") !== "null") return Cookies.get("userImage");
    else return notfound;
  };
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    console.log(imagehandle());
    setUserProfile({
      name: Cookies.get("userName"),
      email: Cookies.get("userEmail"),
      imageUrl: imagehandle(),
    });
  }, []);
  return (
    <div className="flex-col">
      <div className="z-40 relative">
        <NavbarDashboard />
      </div>
      <div className="flex min-h-screen">
        <SidebarMain />
        <div className="overflow-x-auto md:overflow-scroll md:flex-1 p-4">
          <div className="w-full m-4 mx-auto p-4">
            <div className=" flex flex-col items-center">
              <img
                src={userProfile.imageUrl}
                alt={userProfile.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h1 className="text-2xl font-semibold mb-2">
                {userProfile.name}
              </h1>
              <p className="text-gray-500">{userProfile.email}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
