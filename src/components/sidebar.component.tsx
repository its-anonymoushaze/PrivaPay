import cn from "classnames";
import { ArrowLeftRight, FolderKanban, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import useRecordProvider from "../providers/record.providers";

const Sidebar = () => {
  //get the path from the url and set the active class
  const path = window.location.pathname;
  const { isAdmin, setIsAdmin } = useRecordProvider();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: FolderKanban,
      label: "DAO Voting",
      link: "/voting",
    },
    { icon: ArrowLeftRight, label: "bridge", link: "/bridge" },
  ];

  return (
    <div className="flex flex-col w-64  border-r border-gray-900 px-4 py-4 gap-10 h-full">
      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={cn(
              "flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-900 transition-colors",
              {
                "bg-gray-800 text-white": path === item.link,
              },
              {
                "hidden ": item.link === "/bridge" && !isAdmin,
              }
            )}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <button
        className="border border-gray-800 rounded-md px-4 py-2 w-full text-sm flex gap-2 items-center text-gray-500 hover:border-gray-200 hover:text-gray-200 transition-colors"
        onClick={() => {
          setIsAdmin(!isAdmin);
        }}
      >
        <ArrowLeftRight size={16} />
        Switch to {isAdmin ? "User" : "Admin"} view
      </button>
    </div>
  );
};

export default Sidebar;
