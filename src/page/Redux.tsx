import * as React from "react";
import { motion } from "framer-motion";
import "./styles/Page.css";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        delay: 1 + i * 0.5,
        type: "spring",
        bounce: 0,
      },
      opacity: { duration: 0.01, delay: 1 + i * 0.5 },
    },
  }),
};

const Redux = () => (
  <motion.div className="body">
    <motion.svg
      width="800"
      height="500"
      viewBox="0 0 600 500"
      initial="hidden"
      animate="visible"
    >
      {/* C */}
      <motion.path
        d="M 8,223 c 0,0 143,3 185,-181 c 2,-11 -1,-20 1,-33 h 16 c 0,0 -3,17 1,30 c 21,68 -4,242 -204,196 L 8,223 z M 8,230 c 0,0 188,40 196,-160"
        stroke="#fff"
        variants={draw}
        custom={0}
      />
      {/* U */}
      {/* <motion.path
        d="M39 32c17.7 0 32 14.3 32 32V288c0 70.7 57.3 128 128 128s128-57.3 128-128V64c0-17.7 14.3-32 32-32s32 14.3 32 32V288c0 106-86 192-192 192S0 394 0 288V64C0 46.3 14.3 32 32 32z"
        stroke="#fff"
        variants={draw}
        custom={1}
      /> */}
    </motion.svg>
  </motion.div>
);

export default Redux;
