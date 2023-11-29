import NavbarLandingPage from "../components/navbar/LandingPageNavbar";
import Footer from "../components/footer";

import FormLogin from "../components/content/FormLogin";
const Login = () => {
  return (
    <div>
      <div className="z-40 relative">
        <NavbarLandingPage />
      </div>
      <div className="flex flex-col min-h-screen z-0">
        <div className="flex-1">
          <FormLogin />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Login;
