import NavbarLandingPage from "../components/navbar/LandingPageNavbar";

import Footer from "../components/footer";
const NotFound = () => {
  return (
    <>
      <div className="z-40">
        <NavbarLandingPage />
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 items-center justify-center flex">
          <div className="text-center">
            <h1 className="text-10xl font-bold mb-4">404</h1>
            <h2 className="text-9xl font-semibold">NOT FOUND</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
