import { ArrowLeftRight, FolderKanban, LayoutDashboard } from "lucide-react";
import { useRouter } from "../routes/hooks";
import cn from "classnames";
import useRecordProvider from "../providers/record.providers";

const Sidebar = () => {
  //get the path from the url and set the active class
  const path = window.location.pathname;
  const { isAdmin } = useRecordProvider();

  const router = useRouter();

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
    <div className="flex flex-col w-64  border-r border-gray-900 px-4 py-4 gap-10">
      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.link)}
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
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
