import { Link, useLocation } from "react-router-dom";

import {
  BookText,
  KeyRound,
  LayoutDashboard,
  LayoutList,
  LogOut,
  UserCircle,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./SidebarContext";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
export default function SidebarMain() {
  const useActive = (path) => {
    const location = useLocation();
    return location.pathname === path;
  };
  const { handlerFunction } = useContext(GlobalContext);
  const { logoutHandler } = handlerFunction;

  return (
    <Sidebar>
      <Link to={"/dashboard"}>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text={"Dashboard"}
          active={useActive("/dashboard")}
        />
      </Link>
      <Link to={"/dashboard/list-job-vacancy"}>
        <SidebarItem
          icon={<LayoutList size={20} />}
          text={"List Data Table"}
          active={useActive("/dashboard/list-job-vacancy")}
        />
      </Link>
      <Link to={"/dashboard/list-job-vacancy/create"}>
        <SidebarItem
          icon={<BookText size={20} />}
          text={"Data Form"}
          active={useActive("/dashboard/list-job-vacancy/create")}
        />
      </Link>
      <Link to={"/dashboard/profile"}>
        <SidebarItem
          icon={<UserCircle size={20} />}
          text={"Profile"}
          active={useActive("/dashboard/profile")}
        />
      </Link>
      <Link to={"/dashboard/change-password"}>
        <SidebarItem
          icon={<KeyRound size={20} />}
          text={"Change Password"}
          active={useActive("/dashboard/change-password")}
        />
      </Link>
      <button onClick={logoutHandler} type="button" className="text-left">
        <SidebarItem icon={<LogOut size={20} />} text={"Logout"} />
      </button>
    </Sidebar>
  );
}
