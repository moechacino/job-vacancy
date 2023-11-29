import NavbarLandingPage from "../components/navbar/LandingPageNavbar";

import Footer from "../components/footer";
import LandingPageContent from "../components/content/LandingPageContent";
const LandingPage = () => {
  return (
    <>
      <div className="z-40">
        <NavbarLandingPage />
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <LandingPageContent />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
