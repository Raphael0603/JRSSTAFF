import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeSidebarIcon from "/src/assets/images/iconSideBarHome.png";
import MyProfileSidebarIcon from "/src/assets/images/iconMyProfileSideBar.png";
import SchedulesSidebarIcon from "/src/assets/images/iconSchedulesSideBar.png";
import RequestHistorySidebarIcon from "/src/assets/images/iconRequestHistorySideBar.png";
import LogoutSidebarIcon from "/src/assets/images/iconLogoutSideBar.png";

const sidebarItems = [
  { name: "Home", icon: HomeSidebarIcon, href: "/department_head/dashboard" },
  { name: "My Profile", icon: MyProfileSidebarIcon },
  {
    name: "Job Request",
    icon: SchedulesSidebarIcon,
    href: "/department_head/job_request",
    dropdown: [
      { name: "Job Assigning", href: "/department_head/job_request/assign" },
      { name: "Ongoing Job", href: "/department_head/job_request/ongoing" },
      { name: "Completed Job", href: "/department_head/job_request/completed" },
    ],
  },
  {
    name: "Employee",
    icon: RequestHistorySidebarIcon,
    href: "/department_head/employee",
  },
  {
    name: "Reports",
    icon: RequestHistorySidebarIcon,
    href: "/department_head/report",
  },
  {
    name: "Referal",
    icon: RequestHistorySidebarIcon,
    href: "/department_head/referral",
  },
  {
    name: "History",
    icon: RequestHistorySidebarIcon,
    href: "/department_head/history",
  },
  {
    name: "Certificate of Job Completion",
    icon: RequestHistorySidebarIcon,
    href: "/department_head/job_completion",
  },
  { name: "Logout", icon: LogoutSidebarIcon },
];

export default function SideBarIcons() {
  const [isJobRequestDropdownOpen, setIsJobRequestDropdownOpen] =
    useState(false);
  const navigate = useNavigate();

  const toggleJobRequestDropdown = () => {
    setIsJobRequestDropdownOpen(!isJobRequestDropdownOpen);
  };

  const handleJobRequestClick = (e) => {
    e.preventDefault();
    toggleJobRequestDropdown();
    navigate("/department_head/job_request");
  };

  return (
    <ul className="mt-6 space-y-2">
      {sidebarItems.map((item, index) => (
        <li
          key={index}
          className="group-[.active]:bg-blue-950 group-[.active]:text-white cursor-pointer"
        >
          {item.dropdown ? (
            <div>
              <a
                href="#"
                onClick={handleJobRequestClick}
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
                      <Link
                        to={subItem.href}
                        className="flex items-center py-1 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : item.href ? (
            <Link
              to={item.href}
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
            >
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className="w-4 h-4 mr-3"
              />
              <span className="text-sm">{item.name}</span>
            </Link>
          ) : (
            <div className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white cursor-pointer">
              <img
                src={item.icon}
                alt={`${item.name} Icon`}
                className="w-4 h-4 mr-3"
              />
              <span className="text-sm">{item.name}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
