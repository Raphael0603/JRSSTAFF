import { useState } from "react";
import HomeSidebarIcon from "/src/assets/images/iconSideBarHome.png";
import MyProfileSidebarIcon from "/src/assets/images/iconMyProfileSideBar.png";
import SchedulesSidebarIcon from "/src/assets/images/iconSchedulesSideBar.png";
import RequestHistorySidebarIcon from "/src/assets/images/iconRequestHistorySideBar.png";
import LogoutSidebarIcon from "/src/assets/images/iconLogoutSideBar.png";

export default function SideBarIcons() {
  const [isJobRequestDropdownOpen, setIsJobRequestDropdownOpen] =
    useState(false);

  const toggleJobRequestDropdown = () => {
    setIsJobRequestDropdownOpen(!isJobRequestDropdownOpen);
  };

  return (
    <ul className="mt-6 space-y-2">
      {/* SIDEBAR: HOME */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img src={HomeSidebarIcon} alt="Home Icon" className="w-4 h-4 mr-3" />
          <span className="text-sm">Home</span>
        </a>
      </li>
      {/* SIDEBAR: MY PROFILE */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={MyProfileSidebarIcon}
            alt="My Profile Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">My Profile</span>
        </a>
      </li>
      {/* SIDEBAR: JOB REQUEST */}
      <li className="group active">
        <div>
          <a
            href="#"
            onClick={toggleJobRequestDropdown}
            className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white cursor-pointer"
          >
            <img
              src={SchedulesSidebarIcon}
              alt="Schedules Icon"
              className="w-4 h-4 mr-3"
            />
            <span className="text-sm">Job Request</span>
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
              <li>
                <a
                  href="#"
                  className="flex items-center py-1 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md"
                >
                  Job Assigning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-1 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md"
                >
                  Ongoing Job
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-1 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md"
                >
                  Completed Job
                </a>
              </li>
            </ul>
          )}
        </div>
      </li>
      {/* SIDEBAR: STAFF */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={RequestHistorySidebarIcon}
            alt="Request History Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">Staff</span>
        </a>
      </li>
      {/* SIDEBAR: REPORTS */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={RequestHistorySidebarIcon}
            alt="Request History Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">Reports</span>
        </a>
      </li>
      {/* SIDEBAR: REFERAL */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={RequestHistorySidebarIcon}
            alt="Request History Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">Referal</span>
        </a>
      </li>
      {/* SIDEBAR: HISTORY */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={RequestHistorySidebarIcon}
            alt="Request History Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">History</span>
        </a>
      </li>
      {/* SIDEBAR: CERTIFICATE OF JOB COMPLETION */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={RequestHistorySidebarIcon}
            alt="Request History Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">Certificate of Job Completion</span>
        </a>
      </li>
      {/* SIDEBAR: LOGOUT */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={LogoutSidebarIcon}
            alt="Logout Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
}

// import { useState } from "react";
// import HomeSidebarIcon from "/src/assets/images/iconSideBarHome.png";
// import MyProfileSidebarIcon from "/src/assets/images/iconMyProfileSideBar.png";
// import SchedulesSidebarIcon from "/src/assets/images/iconSchedulesSideBar.png";
// import RequestHistorySidebarIcon from "/src/assets/images/iconRequestHistorySideBar.png";
// import LogoutSidebarIcon from "/src/assets/images/iconLogoutSideBar.png";

// export default function SideBarIcons() {
//   const [isJobRequestDropdownOpen, setIsJobRequestDropdownOpen] =
//     useState(false);

//   const toggleJobRequestDropdown = () => {
//     setIsJobRequestDropdownOpen(!isJobRequestDropdownOpen);
//   };

//   return (
//     <ul className="mt-6 space-y-2">
//       {/* SIDEBAR: HOME */}
//       <li className="group active">
//         <a
//           href="#"
//           className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
//         >
//           <img src={HomeSidebarIcon} alt="Home Icon" className="w-4 h-4 mr-3" />
//           <span className="text-sm">Home</span>
//         </a>
//       </li>
//       {/* SIDEBAR: MY PROFILE */}
//       <li className="group active">
//         <a
//           href="#"
//           className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
//         >
//           <img
//             src={MyProfileSidebarIcon}
//             alt="My Profile Icon"
//             className="w-4 h-4 mr-3"
//           />
//           <span className="text-sm">My Profile</span>
//         </a>
//       </li>
//       {/* SIDEBAR: SCHEDULES */}
//       <li className="group active">
//         <a
//           href="#"
//           className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
//         >
//           <img
//             src={SchedulesSidebarIcon}
//             alt="Schedules Icon"
//             className="w-4 h-4 mr-3"
//           />
//           <span className="text-sm">Job Request</span>
//         </a>
//       </li>
//       {/* SIDEBAR: REQUEST HISTORY */}
//       <li className="group active">
//         <a
//           href="#"
//           className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
//         >
//           <img
//             src={RequestHistorySidebarIcon}
//             alt="Request History Icon"
//             className="w-4 h-4 mr-3"
//           />
//           <span className="text-sm">Staff</span>
//         </a>
//       </li>
//       {/* SIDEBAR: LOGOUT */}
//       <li className="group active">
//         <a
//           href="#"
//           className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
//         >
//           <img
//             src={LogoutSidebarIcon}
//             alt="Logout Icon"
//             className="w-4 h-4 mr-3"
//           />
//           <span className="text-sm">Logout</span>
//         </a>
//       </li>
//     </ul>
//   );
// }
