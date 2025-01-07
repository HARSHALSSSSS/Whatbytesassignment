import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <aside className="w-64 bg-white h-full pr-2 pt-12 border-r-2 border-gray-200 hidden lg:block">
      <nav className="space-y-4">
        <a
          href="#"
          onClick={() => setCurrentPage("dashboard")}
          className={`flex items-center gap-4 py-4 px-4 rounded-r-full font-bold ${
            currentPage === "dashboard"
              ? "bg-gray-100 text-blue-600"
              : "text-gray-500 hover:bg-gray-200"
          }`}
        >
          <FiBarChart2 />
          Dashboard
        </a>
        <a
          href="#"
          onClick={() => setCurrentPage("skill-test")}
          className={`flex items-center gap-4 py-4 px-4 rounded-r-full font-bold ${
            currentPage === "skill-test"
              ? "bg-gray-100 text-blue-600"
              : "text-gray-500 hover:bg-gray-200"
          }`}
        >
          <TfiMedallAlt />
          Skill Test
        </a>
        <a
          href="#"
          onClick={() => setCurrentPage("internship")}
          className={`flex items-center gap-4 py-4 px-4 rounded-r-full font-bold ${
            currentPage === "internship"
              ? "bg-gray-100 text-blue-600"
              : "text-gray-500 hover:bg-gray-200"
          }`}
        >
          <FaRegFile />
          Internship
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;