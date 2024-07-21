import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="text-start container mx-auto p-4 grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse mb-4"
          >
            <img
              src="/src/assets/icon/blackicon.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              UikazE
            </span>
          </a>
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Phone: +1 5589 55488 55
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            Email: info@example.com
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://x.com/ttwtcr?s=1"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/ttwtcr?s=1"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/ttsuxz_?igsh=dnYyaXFkYTd6bnFz&utm_source=qr"
              className="text-gray-600 hover:text-pink-500"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ttsuxz-kaseq-694b73312/"
              className="text-gray-600 hover:text-blue-700"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/kazetaw"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Terms of service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:underline"
              >
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold text-gray-600 dark:text-gray-300 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product </li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 flex flex-col">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Our Newsletter
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your email"
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 dark:bg-gray-700 border-t border-gray-300 dark:border-gray-600 py-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; 2023 UiXSHUVO All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
