import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

function Skill() {
  return (
    <>
      <section id="skill">
        <div className="text-center mt-10"></div>
        <div className="container mx-auto px-4 bg-gray-100">
          <div className="flex justify-center gap-4 mt-4">
            <span
              className="text-gray-600 hover:text-orange-600 cursor-pointer"
              aria-label="HTML"
            >
              <FaHtml5 className="w-8 h-8" />
            </span>
            <span
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
              aria-label="CSS"
            >
              <FaCss3Alt className="w-8 h-8" />
            </span>
            <span
              className="text-gray-600 hover:text-yellow-600 cursor-pointer"
              aria-label="JavaScript"
            >
              <FaJs className="w-8 h-8" />
            </span>
            <span
              className="text-gray-600 hover:text-blue-400 cursor-pointer"
              aria-label="React"
            >
              <FaReact className="w-8 h-8" />
            </span>
            <span
              className="text-gray-600 hover:text-purple-600 cursor-pointer"
              aria-label="Redux"
            >
              <SiRedux className="w-8 h-8" />
            </span>
            <span
              className="text-gray-600 hover:text-pink-600 cursor-pointer"
              aria-label="Sass"
            >
              <FaSass className="w-8 h-8" />
            </span>
            <span
              className="text-gray-600 hover:text-teal-400 cursor-pointer"
              aria-label="Tailwind CSS"
            >
              <RiTailwindCssFill className="w-8 h-8" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
