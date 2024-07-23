import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

// Define props for SkillIcon component
interface SkillIconProps extends HTMLMotionProps<"span"> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  label: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({
  icon: Icon,
  color,
  label,
  className,
  ...props
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`text-gray-600 hover:${color} cursor-pointer ${className}`}
      aria-label={label}
      {...props}
    >
      <Icon className="w-6 h-6" />{" "}
    </motion.span>
  );
};

function Skill() {
  return (
    <section id="skill">
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Skills</h2>
      </div>
      <div className="container mx-auto px-4 bg-gray-100">
        <div className="flex justify-center gap-4 mt-4">
          <SkillIcon
            className="hover:text-orange-600"
            icon={FaHtml5}
            color="text-orange-600"
            label="HTML"
          />
          <SkillIcon
            className="hover:text-blue-600"
            icon={FaCss3Alt}
            color="text-blue-600"
            label="CSS"
          />
          <SkillIcon
            className="hover:text-yellow-600"
            icon={FaJs}
            color="text-yellow-600"
            label="JavaScript"
          />
          <SkillIcon
            className="hover:text-blue-400"
            icon={FaReact}
            color="text-blue-400"
            label="React"
          />
          <SkillIcon
            className="hover:text-purple-600"
            icon={SiRedux}
            color="text-purple-600"
            label="Redux"
          />
          <SkillIcon
            className="hover:text-pink-600"
            icon={FaSass}
            color="text-pink-600"
            label="Sass"
          />
          <SkillIcon
            className="hover:text-teal-400"
            icon={RiTailwindCssFill}
            color="text-teal-400"
            label="Tailwind CSS"
          />
        </div>
      </div>
    </section>
  );
}

export default Skill;
