import NavbarLandingPage from "../components/navbar/LandingPageNavbar";
import Footer from "../components/footer";

import FormRegister from "../components/content/FormRegister";
const Register = () => {
  return (
    <div>
      <div className="z-40 relative">
        <NavbarLandingPage />
      </div>
      <div className="flex flex-col min-h-screen z-0">
        <div className="flex-1">
          <FormRegister />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Register;
