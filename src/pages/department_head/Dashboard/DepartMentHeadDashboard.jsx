import Logo from "../../../components/Logo";
import Profile from "./Profile";
import HorizontalNavBar from "../../../components/HorizontalNavBar";
import StatusCard from "../../../components/StatusCard";
import NotificationAndCalendar from "../../../components/NotificationAndCalendar";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import SidebarItem from "../../../components/SidebarItem";
import { useNavigate, useOutlet } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";

export default function DepartmentHeadDashboard() {
  const navigate = useNavigate();
  const otherContent = useOutlet();

  return (
    <div className="text-gray-800 font-inter">
      <SideBar>
        <Logo />
        <Profile />
        <SidebarItem name="Home" onClick={() => navigate("/department_head")} />
        <SidebarItem
          name="My Profile"
          onClick={() => navigate("/department_head/myprofile")}
        />
        <SidebarItem
          name="Job Request"
          onClick={() => navigate("/department_head/job_assign")}
        />
        <SidebarItem
          name="Job Ongoing"
          onClick={() => navigate("/department_head/job_ongoing")}
        />
        <SidebarItem
          name="Job Completed"
          onClick={() => navigate("/department_head/job_completed")}
        />

        <SidebarItem
          name="Employee"
          onClick={() => navigate("/department_head/employee")}
        />
        <SidebarItem
          name="Report"
          onClick={() => navigate("/department_head/report")}
        />
        <SidebarItem
          name="Referral"
          onClick={() => navigate("/department_head/referral")}
        />
        <SidebarItem
          name="History"
          onClick={() => navigate("/department_head/history")}
        />
        <SidebarItem
          name="Certificate of Job Completion"
          onClick={() =>
            navigate("/department_head/approving_of_job_completion")
          }
        />
      </SideBar>

      <MainBody>
        <HorizontalNavBar />
        {otherContent || (
          <>
            <SearchBar title="Dashboard" />
            <div className="flex p-6 gap-6">
              <StatusCard
                title="Job Request"
                count={0}
                bgColor="bg-yellow-400"
              />
              <StatusCard title="Accepted" count={0} bgColor="bg-sky-200" />
              <StatusCard title="Assigned" count={0} bgColor="bg-red-400" />
              <StatusCard title="Completed" count={0} bgColor="bg-green-400" />
              <StatusCard title="Referral" count={0} bgColor="bg-purple-400" />
            </div>
            <NotificationAndCalendar />
          </>
        )}
      </MainBody>
    </div>
  );
}
