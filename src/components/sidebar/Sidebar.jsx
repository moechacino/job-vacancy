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

export default function SidebarMain() {
  const useActive = (path) => {
    const location = useLocation();
    return location.pathname === path;
  };
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
      <SidebarItem
        icon={<BookText size={20} />}
        text={"Data Form"}
        active={useActive("/dashboard/list-job-vacancy/form")}
      />
      <SidebarItem
        icon={<UserCircle size={20} />}
        text={"Profile"}
        active={useActive("/dashboard/profile")}
      />
      <SidebarItem
        icon={<KeyRound size={20} />}
        text={"Change Password"}
        active={useActive("/dashboard/change-password")}
      />
      <SidebarItem icon={<LogOut size={20} />} text={"Logout"} />
    </Sidebar>
  );
}
