import { motion } from "framer-motion";
import "./styles/Page.css";

export const Project = () => (
  <>
    <section id="features-details" className="features-details section py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center features-item">
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <img
              src="https://www.iphonemod.net/wp-content/uploads/2021/09/california-streaming-apple-event-wallpaper-mac-nologo.png"
              className="img-fluid rounded-lg w-full"
              alt=""
            />
          </motion.div>
          <motion.div
            className="col-span-1 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="content p-5">
              <h3 className="text-2xl font-bold">
                Corporis temporibus maiores provident
              </h3>
              <p className="mt-4 text-lg">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <a
                href="#"
                className="btn more-btn mt-4 text-blue-500 hover:text-blue-700"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center features-item mt-10">
          <motion.div
            className="col-span-1 order-2 lg:order-1 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="content p-5">
              <h3 className="text-2xl font-bold">
                Neque ipsum omnis sapiente quod quia dicta
              </h3>
              <p className="mt-4 text-lg">
                Quidem qui dolore incidunt aut. In assumenda harum id iusto
                lorena plasico mares
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <i className="bi bi-easel flex-shrink-0 mr-2"></i> Et corporis
                  ea eveniet ducimus.
                </li>
                <li className="flex items-center">
                  <i className="bi bi-patch-check flex-shrink-0 mr-2"></i>{" "}
                  Exercitationem dolorem sapiente.
                </li>
                <li className="flex items-center">
                  <i className="bi bi-brightness-high flex-shrink-0 mr-2"></i>{" "}
                  Veniam quia modi magnam.
                </li>
              </ul>
              <a
                href="#"
                className="btn more-btn mt-4 text-blue-500 hover:text-blue-700"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div
            className="col-span-1 order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="\src\image\card.png"
              className="img-fluid rounded-lg w-full"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

export default Project;
