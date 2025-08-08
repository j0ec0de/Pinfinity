import { Home, Settings, User, LogOut, CirclePlus, Bell, Send, Compass } from "lucide-react";
import { TbHexagonLetterPFilled } from "react-icons/tb";
import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-16 bg-white border-1 border-gray-300 text-black flex flex-col items-center py-4 space-y-8">
        
        <Link to="/">
          <SidebarItemLogo icon={<TbHexagonLetterPFilled />} />
        </Link>
        <SidebarItem icon={<Home />} />
        <SidebarItem icon={<Compass />} />
        <SidebarItem icon={<CirclePlus />} />
        <SidebarItem icon={<Bell />} />
        <SidebarItem icon={<Send />} />
        <Link to="/">
          <SidebarItem icon={<LogOut />} />
        </Link>
      </div>

      {/* Main Content */}

    </div>
  );
};

const SidebarItem = ({ icon }) => {
  return (
    <div className="p-3 rounded-md hover:bg-gray-700 hover:text-white cursor-pointer transition-all">
      <div className="text-xl">{icon}</div>
    </div>
  );
};

const SidebarItemLogo = ({ icon }) => {
  return (
    <div className="text-purple-600 p-3 rounded-md hover:bg-gray-200  cursor-pointer transition-all">
      <div className="text-3xl">{icon}</div>
    </div>
  );
};


export default SideBar;
