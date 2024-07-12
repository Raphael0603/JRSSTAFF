import HomeSidebarIcon from "/src/assets/images/iconSideBarHome.png";
import MyProfileSidebarIcon from "/src/assets/images/iconMyProfileSideBar.png";
import SchedulesSidebarIcon from "/src/assets/images/iconSchedulesSideBar.png";
import RequestHistorySidebarIcon from "/src/assets/images/iconRequestHistorySideBar.png";
import LogoutSidebarIcon from "/src/assets/images/iconLogoutSideBar.png";

export default function SideBarIcons() {
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
      {/* SIDEBAR: SCHEDULES */}
      <li className="group active">
        <a
          href="#"
          className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md group-[.active]:bg-blue-950 group-[.active]:text-white"
        >
          <img
            src={SchedulesSidebarIcon}
            alt="Schedules Icon"
            className="w-4 h-4 mr-3"
          />
          <span className="text-sm">Job Request</span>
        </a>
      </li>
      {/* SIDEBAR: REQUEST HISTORY */}
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
