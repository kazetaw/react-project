import { Link } from "react-router-dom";
import Footerld from "../components/footerld";
// import styles from "./styles/Landingpage.module.scss";
export const Landingpage = () => {
  return (
    <>
      <div className="bg-white min-h-screen">
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://www.pngarts.com/files/2/Piercing-Transparent.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span
                style={{ fontWeight: 700, fontSize: 16 }}
                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >
                UiXSHUVO
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Book Trip
              </button>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/home"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    TOUR
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    PACKAGE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="src/image/plane.png"
            alt="Plane"
          />

          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <div className="bg-white w-1 h-80 rounded-full relative">
              <div className="w-12 h-12 rounded-full -ml-1.5 mb-20">
                <span className="bg-white absolute flex items-center justify-center w-8 h-8 rounded-full -start-3 ring-2 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <h1 className="text-lg">1</h1>
                </span>
              </div>
              <div className="w-12 h-12 rounded-full -ml-1.5 mb-20">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-3 ring-2 ring-white">
                  <h1 className="text-cyan-50 text-lg">2</h1>
                </span>
              </div>
              <div className="w-12 h-12 rounded-full -ml-1.5 mb-20">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-3 ring-2 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <h1 className="text-cyan-50 text-lg">3</h1>
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-20 top-1/2 transform -translate-y-1/2">
            <div className="whitespace-nowrap">
              <h1 className="text-lg">ELEVATE YOUR TRAVEL JOURNEY</h1>
              <h1 className="font-bold text-5xl">Experience</h1>
              <h1 className="font-bold text-5xl">The Magic Of</h1>
              <h1 className="font-bold text-5xl">Flight!</h1>
            </div>
            <div className="flex space-x-4 mt-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-6 py-3 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book A Trip Now
              </button>
              <button
                type="button"
                className="mt-0 bg-white text-blue-700 border border-blue-200 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-3 py-3 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>

        <br />
        <div className="flex justify-center items-center space-x-4 text-gray-600">
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow">
            <span className="text-lg">Follow</span>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
              </svg>
            </button>
            <a href="#" className="text-blue-700 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <img src="src/image/Airbnb.png" alt="Airbnb" className="h-14" />
            <img
              src="src/image/Booking.png"
              alt="Booking.com"
              className="h-16"
            />
            <img src="src/image/Trivago.png" alt="Trivago" className="h-16" />
            <img src="src/image/Expedia.png" alt="Expedia" className="h-16" />
          </div>
        </div>
        <div>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <br />
                <br />
                <br />
                <h2 className="text-3xl font-bold">Popular Destination</h2>
                <p className="text-gray-600">
                  Unleash Your Wanderlust With SkyWings
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "https://www.aleenta.com/wp-content/uploads/2022/03/The_Best_Time_To_Visit_Phang_Nga.jpg",
                  alt: "Phang Nga",
                },
                {
                  src: "https://img.freepik.com/premium-photo/panoramic-view-aegean-sea-from-santorini-island-greece-with-space-your-own-text_483040-562.jpg?w=1060",
                  alt: "Aegean Sea",
                },
                {
                  src: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/12/09/Pictures/_011ae112-1a63-11ea-9a53-e5149fe5d3ed.jpg",
                  alt: "Forest Wild Life",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <img
                    className="w-full h-52 object-cover rounded-2xl"
                    src={item.src}
                    alt={item.alt}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.alt}</h3>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item.alt}</span>
                    </div>
                    <div className="flex flex-row-reverse">
                      <button
                        className=" rounded-3xl align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-white-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <p className="ms-2 text-sm font-bold text-white-900 dark:text-white">
                            4.7
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <div className="flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold">
              Journey To The Skies Made Simple
            </h2>
            <br />

            <p>
              Travelling Is A Wonderful Way To Explore New Place, Learn About
            </p>
            <p>Different Culture, And Gain Unique Experiences.</p>
          </div>
        </div>
        <br />

        <div className="flex justify-center items-center">
          <div className="flex-none h-40 max-w-sm p-6 bg-gray-100 rounded-lg shadow dark:bg-gray-800 mt-48">
            <a href="#">
              <button
                type="button"
                className="bg-white text-blue-400 border border-white hover:bg-white hover:text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="sr-only">Icon description</span>
              </button>
              <br />
              <br />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Find Your
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Destination
              </h5>
            </a>
          </div>
          <div className="flex-1 max-w-sm p-11 bg-blue-500 border border-gray-200 rounded-t-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <button
              type="button"
              className="bg text-white border border-blue-200 hover:bg-white hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>

              <span className="sr-only">Icon description</span>
            </button>
            <br />
            <br />
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Book
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                A Ticket
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">
              Travelling Is A Wonderful Way To Explore New Places, Learn About
              Different Cultures, And Gain Unique Experiences.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              LEARN MORE
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="flex-none h-40 max-w-sm p-6 bg-gray-100 rounded-3xl shadow dark:bg-gray-800 mt-48">
            <a href="#">
              <button
                type="button"
                className="bg-white text-blue-400 border border-white hover:bg-white hover:text-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                </svg>

                <span className="sr-only">Icon description</span>
              </button>
              <br />
              <br />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pay &
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Start Journey
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          </div>
        </div>
        <br />

        <div className="grid grid-cols-3 gap-4 mt-20">
          <div className="flex flex-col col-span-1">
            <div className="ml-20 max-w-[395px] max-h-[500px]">
              <img
                className="rounded-3xl w-full h-full object-cover"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyfAW3NU2KJ9tBfn7upYFuwZykKZovXEzQQyOm_Zi9VwHFRvGr"
                alt="Child playing in water"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-2 items-start ml-3">
            <div className="grid grid-cols-2 gap-4 mt-24">
              <div className="text-7xl whitespace-nowrap">UNLEASH</div>
              <div className="text-xs text-gray-900 whitespace-nowrap mt-3">
                <p className="">
                  Travelling Is A Wonderful Way To Explore New Place,{" "}
                </p>
                <p>Learn About Different Culture</p>
              </div>
            </div>
            <div className="text-7xl text-start whitespace-nowrap">
              WANDERLUST WITH
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="text-xs text-gray-900 ml-2 whitespace-nowrap">
                <p>Travelling Is A Wonderful Way To Explore</p>
                <p>New Place, Learn About Different Culture</p>
              </div>
              <div className="ml-2 text-6xl text-gray-900 whitespace-nowrap mt-3">
                <p className="">SKYWINGS </p>
              </div>{" "}
            </div>
            <br />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            <button
              type="button"
              className="ml-20 text-white bg-gray-100 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <h1 className="text-3xl text-blue-600">20% OFF</h1>
                </div>
                <div className="text-start ml-3 mt-1">
                  <p className="text-xs text-gray-600">Till 28 September,</p>
                  <p className="text-xs text-gray-600">2023</p>
                </div>
              </div>
            </button>
          </div>
          <div className="col-span-2">
            <button
              type="button"
              className="ml-20 text-gray-900 bg-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-60 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                backgroundImage:
                  "url(https://c.pxhere.com/photos/63/ba/sky_background_nature_blue_clouds_blue_sky_climate_clear-639846.jpg!s2)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-3xl text-gray-900">Book A Flight Now</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <br />
        <div className="grid grid-cols-2 gap-4 mt-20">
          <div className="px-16 ml-10">
            <button
              type="button"
              className="text-gray-900 bg-gray-100 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              ABOUT US
            </button>
          </div>
          <div>
            <p className="font-bold text-xs text-gray-900">
              Travelling Is A Wonderful Way To Explore New Place, Learn About
            </p>
            <p className="font-bold text-xs text-gray-900">
              Different Culture, And Gain Unique Experiences. Travelling Is A
            </p>
            <p className="font-bold text-xs text-gray-900">
              Wonderful Way To Explore New Place, Learn About{" "}
            </p>
            <br />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row">
                {" "}
                <hr
                  style={{
                    borderLeft: "3px solid #3333CC",
                    height: "70px",
                    width: "0",
                    margin: "0",
                  }}
                  className="solid-vertical"
                />
                <p className="ml-2 text-xs text-gray-600 inline-text">
                  Travelling Is A Wonderful Way To Explore New Place, Learn
                  About Different Culture, And Gain Unique Experiences.
                </p>
              </div>

              <div className="flex flex-row ...">
                {" "}
                <hr
                  style={{
                    borderLeft: "3px solid #3333CC",
                    height: "70px",
                    width: "0",
                    margin: "0",
                  }}
                  className="solid-vertical"
                />
                <p className="ml-2 text-xs text-gray-600 inline-text">
                  Travelling Is A Wonderful Way To Explore New Place, About
                  Different Culture, And Gain Unique Experiences.
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>

        <div className="flex justify-center space-x-5 mt-14">
          <div className="flex justify-center items-center w-full max-w-sm bg-gray-100 rounded-3xl">
            <div className="flex flex-col items-center pb-10">
              <br />
              <br />
              <h5 className="mt-8 mb-1 text-5xl font-medium text-blue-700 dark:text-white">
                10+
              </h5>
              <span className="text-sm text-gray-900 dark:text-gray-400">
                Year Experience
              </span>
              <div className="flex mt-4 md:mt-6"></div>
            </div>
          </div>
          <br />
          <div className="flex justify-center items-center w-full max-w-sm bg-gray-100 rounded-3xl">
            <div className="flex flex-col items-center pb-10">
              <br />
              <br />
              <h5 className="mb-1 text-5xl font-medium text-blue-700 dark:text-white">
                12K
              </h5>
              <span className="text-sm text-gray-900 dark:text-gray-400">
                Happy Clients
              </span>
              <div className="flex mt-4 md:mt-6"></div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full max-w-sm bg-gray-100 rounded-3xl">
            <div className="flex flex-col items-center pb-10">
              <br />
              <br />
              <h5 className="mb-1 text-5xl font-medium text-blue-700 dark:text-white">
                4.8
              </h5>
              <span className="text-sm text-gray-900 dark:text-gray-400">
                Overall Rating
              </span>
              <div className="flex mt-4 md:mt-6"></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="text-center mt-14">
          <h1 className="text-4xl font-bold">Discover The World From Above</h1>
          <br />
          <p className="text-xs text-gray-600">
            Travelling Is A Wonderful Way To Explore New Place, Learn About
          </p>
          <p className="text-xs text-gray-600">
            Different Culture, And Gain Unique Experiences.
          </p>{" "}
        </div>
        <br />
        <div className="flex justify-center space-x-5 mt-20">
          <div className="flex justify-center items-center w-full max-w-sm bg-white rounded-3xl">
            <div className="flex flex-col items-center pb-10">
              <button
                type="button"
                className="bg text-blue-800  bg-slate-100 hover:blue-800  hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                </svg>

                <span className="sr-only">Icon description</span>
              </button>
              <br />
              <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                various
              </h5>
              <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Destination
              </h5>
              <p className="text-xs text-gray-600 text-center">
                Travelling Is A Wonderful Way To Explore New Place, Different
                Culture, And Gain Unique Experiences.
              </p>

              <div className="flex mt-4 md:mt-6"></div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full max-w-sm bg-white rounded-3xl">
            <div className="flex flex-col items-center pb-10">
              <button
                type="button"
                className="bg text-blue-800  bg-slate-100 hover:blue-800  hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="sr-only">Icon description</span>
              </button>
              <br />
              <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Everything Is
              </h5>
              <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Included
              </h5>
              <p className="text-xs text-gray-600 text-center">
                Travelling Is A Wonderful Way To Explore New Place, Learn About
                Different Culture, And Gain Unique Experiences.
              </p>

              <div className="flex mt-4 md:mt-6"></div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full max-w-sm bg-white rounded-3xl">
            <div className="flex flex-col items-center pb-10">
              <button
                type="button"
                className="bg text-blue-800  bg-slate-100 hover:blue-800  hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                </svg>

                <span className="sr-only">Icon description</span>
              </button>
              <br />
              <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Affordable
              </h5>
              <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Price
              </h5>
              <p className="text-xs text-gray-600 text-center">
                Travelling Is A Wonderful Way To Explore New Place, Learn About
                Different Culture, And Gain Unique Experiences.
              </p>

              <div className="flex mt-4 md:mt-6"></div>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-3xl text-center mt-20">
          Loved By Over Thousand Travelers
        </h1>
        <br />

        <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
          <div className="max-w-sm p-1 bg-gray-100  border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-sm p-6 bg-white  border-gray-200 rounded-3xl ">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <br />
                <br />
              </div>

              <span>
                "I Just Returned From The Most Amazing Trip To Europe, All
                Thanks To This Travel Agency! From The Moment I Contacted Them,
                They Were Incredibly Helpful And Made Sure To Create An
                Itinerary That Suited My Interests And Budget. I Can't Wait To
                Book My Next Adventure With Them!"
              </span>
            </div>
            <div className="flex items-center">
              <div className="ml-6 pt-2 flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold">Arefin Shuvo</h1>
                <span className="text-sm text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="max-w-sm p-1 bg-blue-500  border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-sm p-6 bg-white  border-gray-200 rounded-3xl ">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <br />
                <br />
              </div>

              <span>
                "I Just Returned From The Most Amazing Trip To Europe, All
                Thanks To This Travel Agency! From The Moment I Contacted Them,
                They Were Incredibly Helpful And Made Sure To Create An
                Itinerary That Suited My Interests And Budget. I Can't Wait To
                Book My Next Adventure With Them!"
              </span>
            </div>
            <div className="flex items-center">
              <div className="ml-6 pt-2 flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold text-white">Arefin Shuvo</h1>
                <span className="text-sm text-white">Product Designer</span>
              </div>
            </div>
          </div>
          <div className="max-w-sm p-1 bg-gray-100  border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-sm p-6 bg-white  border-gray-200 rounded-3xl ">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-blue-500 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <br />
                <br />
              </div>

              <span>
                "I Just Returned From The Most Amazing Trip To Europe, All
                Thanks To This Travel Agency! From The Moment I Contacted Them,
                They Were Incredibly Helpful And Made Sure To Create An
                Itinerary That Suited My Interests And Budget. I Can't Wait To
                Book My Next Adventure With Them!"
              </span>
            </div>
            <div className="flex items-center">
              <div className="ml-6 pt-2 flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold">Arefin Shuvo</h1>
                <span className="text-sm text-gray-500">Product Designer</span>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="flex justify-center space-x-5 mt-20"></div>
        <br />
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col justify-center items-center col-span-1">
            <img
              className="w-36 h-36 rounded-full object-cover"
              src="https://houseoftravelandtours.com/wp-content/uploads/elementor/thumbs/shifaaz-shamoon-qtbV_8P_Ksk-unsplash-q9z45aup4ncx112sk4huiqijlao7lmflwti9nqd1vc.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-center col-span-1">
            <span className="font-bold text-2xl">Explore The Skies</span>
            <h1 className="font-bold text-2xl">With Confidence!</h1>
          </div>
          <div className="flex flex-col justify-center items-center col-span-1">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src="https://i.pinimg.com/564x/52/51/8b/52518bc0879daa54380b02a5ff0b78f8.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm text-gray-500">
              Travelling Is A Wonderful Way To Explore New Places, Learn About
            </p>
            <p className="text-sm text-gray-500">
              Different Cultures, And Gain
            </p>
          </div>
          <div className="flex flex-col justify-center items-center col-span-1">
            <img
              className="w-36 h-36 rounded-full object-cover"
              src="https://i.pinimg.com/736x/63/5f/da/635fda0fbf515620c941c24ebb22ad4f.jpg"
              alt=""
            />
          </div>
        </div>
        <div></div>
        <br />

        <Footerld />
      </div>
    </>
  );
};
