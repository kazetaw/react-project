import { motion, useInView, Transition } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Define the type for transition
interface AnimatedSectionProps {
  refProp: React.RefObject<HTMLDivElement>;
  isInView: boolean;
  children: React.ReactNode;
  initial?: { opacity: number; y: number };
  animate?: { opacity: number; y: number };
  transition?: Transition & { delay?: number }; // Include delay in transition type
  className?: string;
}

// Reusable AnimatedSection component
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  refProp,
  isInView,
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8, ease: "easeOut" },
  className = "",
}) => (
  <motion.div
    ref={refProp}
    initial={initial}
    animate={isInView ? animate : initial}
    transition={transition}
    className={className}
  >
    {children}
  </motion.div>
);

function Project() {
  const refs = Array.from({ length: 6 }, () => useRef<HTMLDivElement>(null));
  const inViewStates = refs.map((ref) => useInView(ref, { once: true }));

  return (
    <section
      id="project"
      className="features-details section py-10 bg-gray-100"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center features-item">
          <AnimatedSection
            refProp={refs[0]}
            isInView={inViewStates[0]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="col-span-1"
          >
            <Link to="pokemon">
              <motion.img
                src="\src\image\pokemon.png"
                className="img-fluid rounded-lg w-full shadow-2xl"
                alt=""
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Link>
          </AnimatedSection>
          <AnimatedSection
            refProp={refs[1]}
            isInView={inViewStates[1]}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="col-span-1 flex items-center"
          >
            <div className="content p-5">
              <h3 className="text-2xl font-bold">Pokemon Project</h3>
              <p className="mt-4 text-lg">
                Utilized Redux for fetching API data to feature character types
                and display detailed information. Implemented efficient state
                management to handle complex data fetching and state
                transitions. Enhanced user experience with smooth animations and
                interactive UI components
              </p>
              <Link
                to="pokemon"
                className="btn more-btn mt-4 text-blue-500 hover:text-blue-700"
              >
                Preview
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center features-item mt-10">
          <AnimatedSection
            refProp={refs[2]}
            isInView={inViewStates[2]}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="col-span-1 order-2 lg:order-1 flex items-center"
          >
            <div className="content p-5">
              <h3 className="text-2xl font-bold">Sign-In Project</h3>
              <p className="mt-4 text-lg">
                Leveraged Ant Design for creating a user-friendly sign-in
                interface and validating user inputs. Implemented robust form
                validation and error handling to enhance security and user
                experience. Applied consistent design principles to ensure a
                cohesive look and feel across the application.
              </p>

              <Link
                to="antd"
                className="btn more-btn mt-4 text-blue-500 hover:text-blue-700"
              >
                Preview
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection
            refProp={refs[3]}
            isInView={inViewStates[3]}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="col-span-1 order-1 lg:order-2"
          >
            <Link to={"antd"}>
              <motion.img
                src="/src/image/sign.png"
                className="img-fluid rounded-lg w-full shadow-2xl"
                alt=""
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Link>
          </AnimatedSection>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between items-center features-item">
          <AnimatedSection
            refProp={refs[4]}
            isInView={inViewStates[4]}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="col-span-1"
          >
            <Link to={"landingpage"}>
              <motion.img
                src="\src\image\land.png"
                className="img-fluid rounded-lg w-full shadow-2xl"
                alt=""
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Link>
          </AnimatedSection>
          <AnimatedSection
            refProp={refs[5]}
            isInView={inViewStates[5]}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className="col-span-1 flex items-center"
          >
            <div className="content p-5">
              <h3 className="text-2xl font-bold">Landing Page Project</h3>
              <p className="mt-4 text-lg">
                Employed Tailwind CSS for layout design and successfully cloned
                a professional design template. Focused on responsive design to
                ensure compatibility across various devices and screen sizes.
                Optimized the code for maintainability and scalability, adhering
                to best practices in CSS.{" "}
              </p>
              <Link
                to="landingpage"
                className="btn more-btn mt-4 text-blue-500 hover:text-blue-700"
              >
                Preview
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default Project;
