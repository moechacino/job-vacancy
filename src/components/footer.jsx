const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 shadow dark:bg-gray-900">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://seeklogo.com/images/P/panda-logo-95DA812E63-seeklogo.com.png"
                className="h-8"
                alt=""
              />
              <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
                OrderJob.inc
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Maulana Akbar S™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
