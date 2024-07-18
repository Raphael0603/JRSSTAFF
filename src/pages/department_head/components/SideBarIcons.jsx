import { useState } from "react";
import HomeSidebarIcon from "/src/assets/images/iconSideBarHome.png";
import MyProfileSidebarIcon from "/src/assets/images/iconMyProfileSideBar.png";
import SchedulesSidebarIcon from "/src/assets/images/iconSchedulesSideBar.png";
import RequestHistorySidebarIcon from "/src/assets/images/iconRequestHistorySideBar.png";
import LogoutSidebarIcon from "/src/assets/images/iconLogoutSideBar.png";

const sidebarItems = [
  { name: "Home", icon: HomeSidebarIcon },
  { name: "My Profile", icon: MyProfileSidebarIcon },
  {
    name: "Job Request",
    icon: SchedulesSidebarIcon,
    dropdown: [
      { name: "Job Assigning" },
      { name: "Ongoing Job" },
      { name: "Completed Job" },
    ],
  },
  { name: "Staff", icon: RequestHistorySidebarIcon },
  { name: "Reports", icon: RequestHistorySidebarIcon },
  { name: "Referal", icon: RequestHistorySidebarIcon },
  { name: "History", icon: RequestHistorySidebarIcon },
  { name: "Certificate of Job Completion", icon: RequestHistorySidebarIcon },
  { name: "Logout", icon: LogoutSidebarIcon },
];

export default function SideBarIcons() {
  const [isJobRequestDropdownOpen, setIsJobRequestDropdownOpen] =
    useState(false);

  const toggleJobRequestDropdown = () => {
    setIsJobRequestDropdownOpen(!isJobRequestDropdownOpen);
  };

  return (
    <ul className="mt-6 space-y-2">
      {sidebarItems.map((item, index) => (
        <li key={index} className="group active">
          {item.dropdown ? (
            <div>
              <a
                href="#"
                onClick={toggleJobRequestDropdown}
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={`${item.name} Icon`}
                  className="w-4 h-4 mr-3"
                />
                <span className="text-sm">{item.name}</span>
                <svg
                  className={`ml-auto transform transition-transform ${
                    isJobRequestDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              {isJobRequestDropdownOpen && (
                <ul className="ml-8 mt-2 space-y-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href="#"
                        className="flex items-center py-1 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
            >
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className="w-4 h-4 mr-3"
              />
              <span className="text-sm">{item.name}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
