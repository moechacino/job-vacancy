import NavbarLandingPage from "../components/navbar/LandingPageNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import LandingPageContent from "../components/content/LandingPageContent";
const LandingPage = () => {
  return (
    <>
      <NavbarLandingPage />
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
