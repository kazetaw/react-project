// import { clsx } from "clsx";
import "./styles/Card.css";
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(45deg, #fdfffd, #8aaed6, #6c6695)",
};
function Card() {
  return (
    <>
      <div style={containerStyle}>
        <div className="flex justify-center items-center min-h-screen ">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="relative hover: bg-blue-950 max-w-sm p-6 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <div className="absolute w-[80px] h-[120px] top-0 right-1/2 left-7 translate-x-1/2 bg-gradient-to-t from-gray-950 to-blue-400 md:block hidden"></div>
                  <div className="absolute w-[80px] h-[120px] bottom-0 right-1/2 left-7 translate-x-1/2 bg-gradient-to-t from-blue-400 to-gray-950 md:block hidden"></div>

                  {/* แนวนอน */}
                  <div className="x:block hidden absolute w-[160.5px] h-[80px] top-20 right-0 -left-20 translate-x-1/2 bg-gradient-to-l from-gray-950 to-blue-400"></div>
                  <div className="x:block hidden absolute w-[236.5px] h-[80px] top-20 right-10 left-7 translate-x-1/2 bg-gradient-to-l from-blue-400 to-gray-950 md:bottom-auto md:translate-x-0 md:right-auto md:h-[80px] md:w-[120px] md:left-0 md:top-1/2 md:translate-y-1/2"></div>

                  <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 gap-4 items-center">
                    <div className="relative ...">
                      <div
                        style={{
                          width: 158,
                          height: 156,
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        className="bottom-0 left-0 lex justify-center items-center"
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src="https://media.istockphoto.com/id/1369274625/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B9%81%E0%B8%A2%E0%B8%87%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A-%E0%B9%80%E0%B8%97%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%95%E0%B8%89%E0%B8%B2%E0%B8%81%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94-%E0%B8%81.jpg?s=612x612&w=0&k=20&c=VDSR-YZPL38DJRbIwMGfSVFEiChTfNXAguprTNh5Uys="
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          width: 150,
                          height: 150,
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        className="absolute bottom-0 top-1 left-1 lex justify-center items-center"
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="grid grid-rows-3 gap-4 items-center text-center">
                      <div className="text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-14 mx-auto"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="font-bold text-center">
                        <span className="text-white">YOUR</span>{" "}
                        <span className="text-blue-500">LOGO</span>{" "}
                        <p className="text-white text-sm font-sans mt-0 font-light">
                          TAGLINE HERE
                        </p>
                      </div>
                      <div className="mt-5">
                        <button
                          type="button"
                          className="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-1 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          yourwebsite.com
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* การ์ดหลัง */}
              <div className="flip-card-back">
                <div className="relative hover: bg-blue-950 max-w-sm p-6  border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                  <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 gap-4">
                    <div>
                      <span className="font-bold text-blue-500">Dicky</span>{" "}
                      <span className="text-white">Prayuda</span>
                      <p className="text-white">Graphic Designer</p>
                      <div className="flex mt-5">
                        <div className="text-white flex-none w-8">
                          <button
                            type="button"
                            className="text-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <span className="sr-only">Icon description</span>
                          </button>
                        </div>
                        <div className="flex-none w-2">
                          <hr
                            style={{
                              borderLeft: "3px solid #3333CC",
                              height: "29px",
                              width: "0",
                              margin: "0",
                            }}
                            className="solid-vertical"
                          />
                        </div>
                        <div className="col-span-1">
                          <p className="font-bold text-blue-500 text-xs">
                            Phone
                          </p>
                          <p className="font-bold text-white text-xs">
                            099 999 999
                          </p>
                          <hr style={{}} className="solid-vertical" />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-white flex-none w-8">
                          <button
                            type="button"
                            className="text-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                                clip-rule="evenodd"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <span className="sr-only">Icon description</span>
                          </button>
                        </div>
                        <div className="flex-none w-2">
                          <hr
                            style={{
                              borderLeft: "3px solid #3333CC",
                              height: "29px",
                              width: "0",
                              margin: "0",
                            }}
                            className="solid-vertical"
                          />
                        </div>
                        <div className="col-span-1">
                          <p className="font-bold text-blue-500 text-xs">
                            Email
                          </p>
                          <p className="font-bold text-white text-xs">
                            user@gmail.com
                          </p>
                          <hr style={{}} className="solid-vertical" />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-white flex-none w-8">
                          <button
                            type="button"
                            className="text-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path
                                fill-rule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <span className="sr-only">Icon description</span>
                          </button>
                        </div>
                        <div className="flex-none w-2">
                          <hr
                            style={{
                              borderLeft: "3px solid #3333CC",
                              height: "29px",
                              width: "0",
                              margin: "0",
                            }}
                            className="solid-vertical"
                          />
                        </div>
                        <div className="col-span-1">
                          <p className="font-bold text-blue-500 text-xs">
                            Location
                          </p>
                          <p className="font-bold text-white text-xs">
                            Address here City
                          </p>
                          <hr style={{}} className="solid-vertical" />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="text-white flex-none w-8">
                          <button
                            type="button"
                            className="text-white border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                            </svg>

                            <span className="sr-only">Icon description</span>
                          </button>
                        </div>
                        <div className="flex-none w-2">
                          <hr
                            style={{
                              borderLeft: "3px solid #3333CC",
                              height: "29px",
                              width: "0",
                              margin: "0",
                            }}
                            className="solid-vertical"
                          />
                        </div>
                        <div className="col-span-1">
                          <p className="font-bold text-blue-500 text-xs">
                            Website
                          </p>
                          <p className="font-bold text-white text-xs">
                            Youwebsite.com
                          </p>
                          <hr style={{}} className="solid-vertical" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[80px] h-[120px] top-0 right-0 left-1/2 translate-x-12 bg-gradient-to-t from-gray-950 to-blue-400 md:block hidden"></div>
                    <div className="absolute w-[80px] h-[120px] bottom-0 right-0 left-1/2 translate-x-12 bg-gradient-to-t from-blue-400 to-gray-950 md:block hidden"></div>

                    {/* แนวนอน */}
                    <div className="x:block hidden absolute w-[160.5px] h-[80px] top-72 right-0 -left-20 translate-x-1/2 bg-gradient-to-l from-gray-950 to-blue-400"></div>
                    <div className="x:block hidden absolute w-[236.5px] h-[80px] top-72 right-10 left-7 translate-x-1/2 bg-gradient-to-l from-blue-400 to-gray-950 md:bottom-auto md:translate-x-0 md:right-auto md:h-[80px] md:w-[120px] md:left-0 md:top-1/2 md:translate-y-1/2"></div>

                    <div className="relative justify-center items-center">
                      <div
                        style={{
                          width: 158,
                          height: 156,
                          overflow: "hidden",
                          borderRadius: "50%",
                        }}
                        className="bottom-0 left-0 lex justify-center items-center"
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src="https://media.istockphoto.com/id/1369274625/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B9%81%E0%B8%A2%E0%B8%87%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1-%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B5%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%9A-%E0%B9%80%E0%B8%97%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%95%E0%B8%89%E0%B8%B2%E0%B8%81%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94-%E0%B8%81.jpg?s=612x612&w=0&k=20&c=VDSR-YZPL38DJRbIwMGfSVFEiChTfNXAguprTNh5Uys="
                          alt=""
                        />
                      </div>
                      <div
                        style={{
                          width: 150,
                          height: 150,
                          overflow: "hidden",
                          borderRadius: "50%",
                          display: "flex",
                        }}
                        className="absolute bottom-0 top-1 left-1 justify-center items-center"
                      >
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
