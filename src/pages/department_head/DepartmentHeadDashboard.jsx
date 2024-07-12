import SidebarMenu from "../../components/SideBarContent";
import SideBarProfile from "../../components/SideBarProfile";
import SideBarIcons from "../../components/SideBarIcons";
import HorizontalNavBar from "../../components/HorizontalNavBar";
import StatusCard from "../../components/StatusCard";
import NotificationAndCalendar from "../../components/NotificationAndCalendar";

export default function DepartmentHeadDashboard() {
  return (
    <body className="text-gray-800 font-inter">
      <div className="fixed left-0 top-0 w-64 h-full bg-blue-950 p-4 z-50 sidebar-menu transition-transform">
        {/* SIDE CONTENT */}
        <SidebarMenu />
        <SideBarProfile />
        <SideBarIcons />
      </div>

      {/* MAIN BODY */}
      <main className="ml-64 bg-gray-50 min-h-screen transition-all">
        <HorizontalNavBar />

        {/* TEXT DASHBOARD */}
        <p className="font-bold text-xl py-4 px-6 font-inter">DASHBOARD</p>

        {/* Status Card */}
        <StatusCard />

        <NotificationAndCalendar />
      </main>
    </body>
  );
}

// const DepartmentHeadDashboard = () => {
//   return (
//     <div>
//       <h1>Department Head Dashboard</h1>
//     </div>
//   );
// };

// export default DepartmentHeadDashboard;
