import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Define the type for ServiceItem props
interface ServiceItemProps {
  link: string;
  image: string;
  title: string;
  delay: number;
}

const serviceItems = [
  {
    icon: "bi bi-activity",
    title: "todo",
    delay: 0.1,
    bgColor: "bg-cyan-500",
    link: "/todo",
    image: "/src/image/todos.png",
  },
  {
    icon: "bi bi-broadcast",
    title: "word",
    delay: 0.2,
    bgColor: "bg-orange-500",
    link: "/word",
    image: "/src/image/word.png",
  },
  {
    icon: "bi bi-easel",
    title: "Card",
    delay: 0.3,
    bgColor: "bg-teal-500",
    link: "/card",
    image: "/src/image/card.png",
  },
  {
    icon: "bi bi-bounding-box-circles",
    title: "shopping_cart",
    delay: 0.4,
    bgColor: "bg-red-500",
    link: "/shopping_cart",
    image: "/src/image/cart.png",
  },
];

function Miniproject() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-xl">Mini Project</h1>
        <span className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 mt-5 ">
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={index}
            link={item.link}
            image={item.image}
            title={item.title}
            delay={item.delay}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceItem({ link, image, title, delay }: ServiceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay, duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      }}
      className={`service-item relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 h-40 md:h-96`}
    >
      <Link to={link} className="block relative w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 p-5 bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default Miniproject;
