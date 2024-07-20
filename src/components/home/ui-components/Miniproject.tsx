import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    icon: "bi bi-activity",
    title: "todo",
    description:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    delay: 0.1,
    bgColor: "bg-cyan-500",
    link: "/todo",
  },
  {
    icon: "bi bi-broadcast",
    title: "word",
    description:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    delay: 0.2,
    bgColor: "bg-orange-500",
    link: "/word",
  },
  {
    icon: "bi bi-easel",
    title: "Card",
    description:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    delay: 0.3,
    bgColor: "bg-teal-500",
    link: "/card",
  },
  {
    icon: "bi bi-bounding-box-circles",
    title: "shopping_cart",
    description:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    delay: 0.4,
    bgColor: "bg-red-500",
    link: "/shopping_cart",
  },
];

function Miniproject() {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="font-bold text-xl">Mini Project</h1>
          <span className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          </span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
              }}
              className={`service-item ${item.bgColor} p-5 rounded-lg relative shadow-lg transition-all duration-300`}
            >
              <Link to={item.link} className="block">
                <i className={`${item.icon} text-2xl text-white mb-3`}></i>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white mb-3">{item.description}</p>
                  <span className="text-white underline flex items-center">
                    Learn More <i className="bi bi-arrow-right ml-2"></i>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Miniproject;
