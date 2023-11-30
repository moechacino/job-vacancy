import NavbarDashboard from "../components/navbar/DashboardNavbar";

import Footer from "../components/footer";
import SidebarMain from "../components/sidebar/Sidebar";
import JobForm from "../components/content/JobForm";
const DataForm = () => {
  return (
    <div className="flex-col">
      <div className="z-40 relative">
        <NavbarDashboard />
      </div>
      <div className="flex min-h-screen">
        <SidebarMain />
        <div className="overflow-x-auto md:overflow-scroll md:flex-1 p-4">
          <JobForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataForm;
