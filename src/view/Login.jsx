import NavbarLandingPage from "../components/navbar/LandingPageNavbar";
import Footer from "../components/footer";

import FormLogin from "../components/content/FormLogin";
const Login = () => {
  return (
    <>
      <NavbarLandingPage />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <FormLogin />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Login;
