import NavbarLandingPage from "../components/navbar/LandingPageNavbar";
import Footer from "../components/footer";

import FormRegister from "../components/content/FormRegister";
const Register = () => {
  return (
    <>
      <NavbarLandingPage />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <FormRegister />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Register;
