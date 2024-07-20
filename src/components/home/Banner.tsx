import { motion } from "framer-motion";
// import React from "react";
const svgVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "#fff",
  },
};
function Banner() {
  return (
    <>
      {" "}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-opacity-50">
          <img
            src="/src/image/bg-light.webp"
            alt=""
            className="object-cover w-full h-full opacity-100"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
          <div className="banner-text">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="200 400 500 100"
              className="item"
              width="180px"
              height="500"
              style={{
                filter: "drop-shadow(2px 2px 9px rgba(0, 0, 0, 0.5))",
              }}
            >
              <motion.path
                d="M 83.00,0.42
        C 47.77,5.74 18.16,26.76 5.69,61.00
        -12.66,111.42 12.37,168.57 64.00,186.00
        71.64,188.57 80.93,190.90 89.00,191.00
        102.56,191.15 125.95,190.18 136.98,181.59
        149.70,171.68 145.00,151.76 129.00,148.68
        123.16,147.56 117.48,150.28 112.00,151.98
        106.99,153.52 102.22,154.15 97.00,154.49
        65.05,156.53 36.17,126.27 36.18,95.00
        36.18,72.47 51.00,51.33 71.00,41.78
        77.14,38.85 88.22,36.18 95.00,36.18
        127.16,36.17 152.49,62.77 154.49,94.00
        155.34,107.41 148.34,118.09 148.34,126.00
        148.34,134.55 154.44,142.48 163.00,143.79
        179.26,146.27 184.00,135.22 187.71,122.00
        189.39,116.01 190.92,108.20 191.00,102.00
        191.00,102.00 191.00,89.00 191.00,89.00
        190.90,80.63 188.39,70.90 185.66,63.00
        170.77,19.96 127.65,-5.03 83.00,0.42 Z
        M 174.00,156.52
        C 169.34,157.77 166.66,158.66 163.04,162.11
        146.86,177.50 160.56,204.89 184.00,199.47
        197.79,196.28 204.39,179.08 197.47,167.00
        192.68,158.66 183.22,155.09 174.00,156.52 Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                stroke="#fff"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>{" "}
            <motion.svg
              width="800"
              height="500"
              viewBox="50 -130 100 700"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M 333.24 85.32 L 287.16 85.32 A 4.27 4.27 0 0 1 286.286 85.236 Q 285.74 85.122 285.326 84.852 A 2.373 2.373 0 0 1 284.94 84.54 Q 284.222 83.822 284.165 82.544 A 5.037 5.037 0 0 1 284.16 82.32 L 284.16 3.72 A 4.27 4.27 0 0 1 284.244 2.846 Q 284.358 2.3 284.628 1.886 A 2.373 2.373 0 0 1 284.94 1.5 Q 285.658 0.782 286.936 0.725 A 5.037 5.037 0 0 1 287.16 0.72 L 333.24 0.72 A 3.862 3.862 0 0 1 333.969 0.785 Q 334.657 0.917 335.1 1.32 A 1.96 1.96 0 0 1 335.702 2.401 A 2.926 2.926 0 0 1 335.76 3 A 3.467 3.467 0 0 1 335.696 3.692 Q 335.554 4.388 335.1 4.8 A 2.163 2.163 0 0 1 334.246 5.268 Q 333.803 5.4 333.24 5.4 L 289.2 5.4 L 289.2 40.08 L 330.84 40.08 A 3.862 3.862 0 0 1 331.569 40.145 Q 332.257 40.277 332.7 40.68 A 1.96 1.96 0 0 1 333.302 41.761 A 2.926 2.926 0 0 1 333.36 42.36 A 3.467 3.467 0 0 1 333.296 43.052 Q 333.154 43.748 332.7 44.16 A 2.163 2.163 0 0 1 331.846 44.628 Q 331.403 44.76 330.84 44.76 L 289.2 44.76 L 289.2 80.64 L 333.24 80.64 A 3.862 3.862 0 0 1 333.969 80.705 Q 334.657 80.837 335.1 81.24 A 1.96 1.96 0 0 1 335.702 82.321 A 2.926 2.926 0 0 1 335.76 82.92 A 3.467 3.467 0 0 1 335.696 83.612 Q 335.554 84.308 335.1 84.72 A 2.163 2.163 0 0 1 334.246 85.188 Q 333.803 85.32 333.24 85.32 Z M 0 52.8 L 0 2.64 A 4.208 4.208 0 0 1 0.061 1.897 Q 0.135 1.49 0.295 1.17 A 1.956 1.956 0 0 1 0.66 0.66 Q 1.287 0.033 2.401 0.002 A 4.219 4.219 0 0 1 2.52 0 A 3.504 3.504 0 0 1 3.265 0.075 Q 3.942 0.222 4.38 0.66 Q 4.927 1.207 5.021 2.206 A 4.643 4.643 0 0 1 5.04 2.64 L 5.04 52.08 A 50.342 50.342 0 0 0 5.648 60.183 Q 7.089 68.995 11.94 74.1 A 21.966 21.966 0 0 0 21.731 79.958 Q 26.374 81.36 32.28 81.36 A 40.305 40.305 0 0 0 40.099 80.651 Q 47.978 79.091 52.68 74.1 A 22.539 22.539 0 0 0 57.474 65.981 Q 58.689 62.52 59.182 58.268 A 53.752 53.752 0 0 0 59.52 52.08 L 59.52 2.64 A 4.208 4.208 0 0 1 59.581 1.897 Q 59.655 1.49 59.815 1.17 A 1.956 1.956 0 0 1 60.18 0.66 Q 60.807 0.033 61.921 0.002 A 4.219 4.219 0 0 1 62.04 0 A 3.504 3.504 0 0 1 62.785 0.075 Q 63.462 0.222 63.9 0.66 Q 64.447 1.207 64.541 2.206 A 4.643 4.643 0 0 1 64.56 2.64 L 64.56 52.8 A 53.049 53.049 0 0 1 63.956 61.03 Q 63.253 65.506 61.73 69.243 A 30.344 30.344 0 0 1 60.9 71.1 Q 57.24 78.6 50.04 82.44 Q 42.84 86.28 32.28 86.28 Q 24.36 86.28 18.3 84.12 A 26.835 26.835 0 0 1 11.672 80.708 A 23.551 23.551 0 0 1 8.22 77.7 A 26.819 26.819 0 0 1 3.311 70.286 A 32.942 32.942 0 0 1 2.1 67.2 Q 0 60.96 0 52.8 Z M 199.56 52.32 L 204.48 52.32 L 204.48 56.76 L 199.8 56.76 Q 187.92 56.76 181.38 57.78 Q 174.84 58.8 172.26 61.38 A 8.432 8.432 0 0 0 170.082 65.274 Q 169.73 66.604 169.686 68.184 A 16.426 16.426 0 0 0 169.68 68.64 A 13.435 13.435 0 0 0 170.491 73.391 A 11.917 11.917 0 0 0 173.7 78.06 Q 177.72 81.72 184.56 81.72 Q 190.08 81.72 194.22 79.02 A 18.998 18.998 0 0 0 200.722 71.772 A 22.296 22.296 0 0 0 200.76 71.7 A 21.356 21.356 0 0 0 203.001 64.148 A 26.622 26.622 0 0 0 203.16 61.2 L 203.16 47.52 A 35.2 35.2 0 0 0 202.894 43.03 Q 202.264 38.147 200.14 35.344 A 9.866 9.866 0 0 0 199.8 34.92 Q 197.015 31.637 191.425 31.076 A 24.291 24.291 0 0 0 189 30.96 Q 184.2 30.96 179.82 32.28 A 38.548 38.548 0 0 0 175.048 34.089 A 51.439 51.439 0 0 0 170.64 36.36 Q 169.56 36.96 168.78 36.84 A 2.248 2.248 0 0 1 168.085 36.62 A 1.945 1.945 0 0 1 167.52 36.18 A 2.844 2.844 0 0 1 166.946 35.167 A 3.483 3.483 0 0 1 166.86 34.86 A 2.571 2.571 0 0 1 166.793 34.319 Q 166.786 33.827 166.98 33.36 Q 167.28 32.64 168.12 32.16 Q 173.04 29.16 178.32 27.72 Q 183.6 26.28 188.76 26.28 Q 194.055 26.28 197.882 27.748 A 16.509 16.509 0 0 1 199.68 28.56 A 14.157 14.157 0 0 1 206.092 35.502 A 17.007 17.007 0 0 1 206.1 35.52 A 21.421 21.421 0 0 1 207.46 39.758 Q 207.922 41.893 208.096 44.391 A 45.197 45.197 0 0 1 208.2 47.52 L 208.2 83.4 A 3.898 3.898 0 0 1 208.123 84.201 Q 207.984 84.859 207.6 85.32 Q 207.027 86.007 205.908 86.039 A 3.866 3.866 0 0 1 205.8 86.04 A 3.208 3.208 0 0 1 205.039 85.955 A 2.14 2.14 0 0 1 203.94 85.32 A 2.44 2.44 0 0 1 203.36 84.176 A 3.578 3.578 0 0 1 203.28 83.4 L 203.28 70.8 L 204.6 70.8 Q 203.4 75.6 200.52 79.08 Q 197.64 82.56 193.5 84.42 A 21.173 21.173 0 0 1 187.174 86.116 A 26.318 26.318 0 0 1 184.2 86.28 Q 178.56 86.28 174 84 A 19.409 19.409 0 0 1 169.05 80.517 A 17.506 17.506 0 0 1 166.8 77.82 Q 164.16 73.92 164.16 69.12 Q 164.16 64.187 166.003 60.888 A 11.31 11.31 0 0 1 167.34 58.98 Q 170.52 55.32 178.26 53.82 A 65.548 65.548 0 0 1 183.666 53.029 Q 189.313 52.42 196.993 52.334 A 230.206 230.206 0 0 1 199.56 52.32 Z M 111.12 83.4 L 111.12 2.64 A 4.208 4.208 0 0 1 111.181 1.897 Q 111.255 1.49 111.415 1.17 A 1.956 1.956 0 0 1 111.78 0.66 Q 112.407 0.033 113.521 0.002 A 4.219 4.219 0 0 1 113.64 0 A 3.504 3.504 0 0 1 114.385 0.075 Q 115.062 0.222 115.5 0.66 Q 116.047 1.207 116.141 2.206 A 4.643 4.643 0 0 1 116.16 2.64 L 116.16 54.12 L 116.4 54.12 L 145.32 28.32 A 14.323 14.323 0 0 1 146.123 27.665 Q 146.641 27.274 147.12 27 Q 147.949 26.527 149.127 26.52 A 5.971 5.971 0 0 1 149.16 26.52 A 2.783 2.783 0 0 1 149.855 26.602 A 2.026 2.026 0 0 1 150.72 27.06 A 1.578 1.578 0 0 1 151.264 28.21 Q 151.266 28.249 151.266 28.29 A 2.109 2.109 0 0 1 151.26 28.44 A 1.928 1.928 0 0 1 151.076 29.115 Q 150.833 29.638 150.276 30.204 A 6.584 6.584 0 0 1 150.24 30.24 L 119.4 57.6 L 119.4 53.28 L 152.88 81.84 Q 154.08 82.8 154.2 83.76 Q 154.277 84.376 154.082 84.869 A 1.919 1.919 0 0 1 153.78 85.38 A 1.761 1.761 0 0 1 152.57 86.024 A 2.529 2.529 0 0 1 152.28 86.04 A 4.078 4.078 0 0 1 151.363 85.942 A 3.122 3.122 0 0 1 150.42 85.56 A 10.477 10.477 0 0 1 149.909 85.222 Q 149.403 84.868 148.74 84.34 A 42.218 42.218 0 0 1 148.32 84 L 116.4 56.88 L 116.16 56.88 L 116.16 83.4 A 3.994 3.994 0 0 1 116.04 84.429 Q 115.687 85.747 114.306 85.987 A 3.896 3.896 0 0 1 113.64 86.04 A 3.208 3.208 0 0 1 112.879 85.955 A 2.14 2.14 0 0 1 111.78 85.32 A 2.44 2.44 0 0 1 111.2 84.176 A 3.578 3.578 0 0 1 111.12 83.4 Z M 267.12 85.32 L 227.4 85.32 Q 226.76 85.32 226.306 85.16 A 1.823 1.823 0 0 1 225.9 84.96 Q 225.36 84.6 225.12 83.94 Q 224.929 83.414 225.042 82.774 A 3.337 3.337 0 0 1 225.12 82.44 A 3.817 3.817 0 0 1 225.495 81.574 Q 225.702 81.218 225.995 80.862 A 6.548 6.548 0 0 1 226.08 80.76 L 262.44 30 L 262.44 31.56 L 226.92 31.56 Q 225.84 31.56 225.24 30.96 A 2.02 2.02 0 0 1 224.661 29.747 A 2.776 2.776 0 0 1 224.64 29.4 Q 224.64 28.44 225.24 27.84 Q 225.811 27.269 226.816 27.242 A 3.764 3.764 0 0 1 226.92 27.24 L 264.96 27.24 Q 265.741 27.24 266.302 27.428 A 2.466 2.466 0 0 1 266.7 27.6 A 2.258 2.258 0 0 1 267.182 27.947 A 1.729 1.729 0 0 1 267.6 28.56 A 1.944 1.944 0 0 1 267.734 29.181 Q 267.747 29.426 267.707 29.694 A 3.208 3.208 0 0 1 267.66 29.94 A 3.801 3.801 0 0 1 267.381 30.722 Q 267.185 31.134 266.88 31.56 L 230.16 82.68 L 230.16 81 L 267.12 81 A 3.477 3.477 0 0 1 268.007 81.103 Q 269.139 81.403 269.351 82.574 A 3.294 3.294 0 0 1 269.4 83.16 Q 269.4 84.12 268.8 84.72 Q 268.229 85.291 267.224 85.319 A 3.764 3.764 0 0 1 267.12 85.32 Z M 85.68 83.04 L 85.68 29.52 A 4.208 4.208 0 0 1 85.741 28.777 Q 85.815 28.37 85.975 28.05 A 1.956 1.956 0 0 1 86.34 27.54 Q 86.967 26.913 88.081 26.882 A 4.219 4.219 0 0 1 88.2 26.88 A 3.504 3.504 0 0 1 88.945 26.955 Q 89.622 27.102 90.06 27.54 Q 90.607 28.087 90.701 29.086 A 4.643 4.643 0 0 1 90.72 29.52 L 90.72 83.04 A 3.898 3.898 0 0 1 90.643 83.841 Q 90.504 84.499 90.12 84.96 A 1.848 1.848 0 0 1 89.279 85.522 Q 88.97 85.628 88.589 85.663 A 4.269 4.269 0 0 1 88.2 85.68 A 3.208 3.208 0 0 1 87.439 85.595 A 2.14 2.14 0 0 1 86.34 84.96 A 2.44 2.44 0 0 1 85.76 83.816 A 3.578 3.578 0 0 1 85.68 83.04 Z M 88.2 11.4 Q 86.28 11.4 85.14 10.26 A 3.809 3.809 0 0 1 84.09 8.218 A 5.493 5.493 0 0 1 84 7.2 A 5.804 5.804 0 0 1 84.111 6.025 Q 84.356 4.841 85.14 4.14 A 3.864 3.864 0 0 1 86.844 3.27 Q 87.426 3.129 88.109 3.121 A 7.123 7.123 0 0 1 88.2 3.12 A 6.529 6.529 0 0 1 89.408 3.225 Q 90.586 3.447 91.32 4.14 A 3.206 3.206 0 0 1 92.163 5.512 Q 92.33 6.026 92.379 6.652 A 6.946 6.946 0 0 1 92.4 7.2 A 5.525 5.525 0 0 1 92.254 8.505 A 3.805 3.805 0 0 1 91.32 10.26 A 3.474 3.474 0 0 1 89.699 11.212 Q 89.155 11.365 88.505 11.393 A 6.921 6.921 0 0 1 88.2 11.4 Z"
                stroke="#fff"
                variants={svgVariants}
                custom={1}
                style={{
                  strokeLinecap: "round",
                  strokeWidth: "10px",
                  filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))",
                }}
              />
            </motion.svg>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            Welcome to <span className="text-blue-900">QuickStart</span>
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-sans"
          >
            <span className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dicta
              totam
            </span>
          </motion.h5>

          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold"
            >
              {" "}
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                style={{ cursor: "pointer !important" }}
              >
                Learn more
              </button>
            </motion.div>
          </div>
          <img
            src="assets/img/hero-services-img.webp"
            alt=""
            className="mt-8 max-w-full h-auto"
            data-aos="zoom-out"
            data-aos-delay="300"
          />
        </div>
      </section>
    </>
  );
}

export default Banner;
