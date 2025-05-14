
import { ArrowLeftRight, FolderKanban, HelpCircle, LayoutDashboard } from "lucide-react";
import Organization from "./organization";

const Sidebar = () => {
  //get the path from the url and set the active class
  const path = window.location.pathname;

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", link: "/dashboard" },
    { icon: FolderKanban, label: "Employees", link: "/employee" },
    { icon: ArrowLeftRight, label: "bridge", link: "/bridge" },
  ];


  return (
    <div className="flex flex-col h-screen w-64  border-r border-gray-900 px-4 py-4 gap-10">
      {/* Header */}

     
<Organization/>
      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => window.location.replace(item.link)}
            className={`flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-900 transition-colors ${
              path === item.link ? "bg-gray-800 text-white" : ""
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Support Section */}
      <div className="p-4 mt-auto ">
        <button className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
          <HelpCircle className="h-5 w-5 mr-3" />
          <span className="text-sm font-medium">Support</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
