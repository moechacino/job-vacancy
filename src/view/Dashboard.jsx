import NavbarDashboard from "../components/navbar/DashboardNavbar";

import Footer from "../components/footer";
import SidebarMain from "../components/sidebar/Sidebar";
const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="flex min-h-screen">
        <SidebarMain />
        <div className="flex-1 p-4">
          <h1>This is content</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
