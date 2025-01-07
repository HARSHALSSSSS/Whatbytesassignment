import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";

const BottomNav = () => {
  return (
    <aside className="w-full bg-white h-20 border-t-2 border-gray-200 fixed bottom-0 left-0 z-10 lg:hidden">
      <nav className="flex justify-around items-center pt-2 h-full">
        <a
          href="#"
          className="flex flex-col items-center h-full rounded-t-full justify-center w-full text-gray-500 font-bold hover:bg-gray-200"
        >
          <FiBarChart2 className="text-xl mb-1" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex flex-col items-center h-full rounded-t-full justify-center w-full text-blue-600 font-bold bg-gray-100"
        >
          <TfiMedallAlt className="text-xl mb-1" />
          Skill Test
        </a>
        <a
          href="#"
          className="flex flex-col items-center h-full rounded-t-full justify-center w-full text-gray-500 font-bold hover:bg-gray-200"
        >
          <FaRegFile className="text-xl mb-1" />
          Internship
        </a>
      </nav>
    </aside>
  );
};

export default BottomNav;
