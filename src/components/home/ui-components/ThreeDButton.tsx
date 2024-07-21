import { motion } from "framer-motion";

const buttonVariants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  },
  hover: {
    scale: 1.1,
    rotateX: 10,
    rotateY: 10,
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const shapeVariants = {
  rest: {
    opacity: 0,
    scale: 0,
  },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.2,
    },
  },
};

function ThreeDButtonWithShapes() {
  return (
    <>
      <motion.button
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        className="relative w-40 h-12 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none overflow-hidden"
        style={{
          perspective: "1000px", // Needed for 3D effect
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d", // Needed for 3D effect
          }}
        >
          <span className="relative z-10">Click Me</span>
        </div>

        {/* Shapes */}
        <motion.div
          variants={shapeVariants}
          className="absolute w-10 h-10 bg-red-500 rounded-full"
          style={{ top: "-20%", left: "-20%" }}
        ></motion.div>
        <motion.div
          variants={shapeVariants}
          className="absolute w-12 h-12 bg-yellow-500 rounded-full"
          style={{ bottom: "-20%", right: "-20%" }}
        ></motion.div>
        <motion.div
          variants={shapeVariants}
          className="absolute w-16 h-16 bg-green-500"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(45deg)",
          }}
        ></motion.div>
      </motion.button>
    </>
  );
}

export default ThreeDButtonWithShapes;
