import Logo from "../../../components/Logo";
import Profile from "./Profile";
import HorizontalNavBar from "../../../components/HorizontalNavBar";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import SidebarItem from "../../../components/SidebarItem";
import { useNavigate, useOutlet, Outlet } from "react-router-dom";
import iconHome from "../../../assets/images/iconHome.png";
import iconProfile from "../../../assets/images/iconProfile.png";
import iconRequest from "../../../assets/images/iconRequest.png";
import iconEmployee from "../../../assets/images/iconEmployee.png";
import iconReport from "../../../assets/images/iconReport.png";
import iconDate from "../../../assets/images/iconDate.png";
import ContentDashboard from "./ContentDashboard";

export default function DepartmentHeadDashboard() {
  const navigate = useNavigate();
  const otherContent = useOutlet();

  return (
    <div className="text-gray-800 font-inter">
      <SideBar>
        <Logo />
        <Profile />
        <SidebarItem
          name="Home"
          image={iconHome}
          onClick={() => navigate("/department_head/home")}
        />
        <SidebarItem
          name="My Profile"
          onClick={() => navigate("/department_head/myprofile")}
          image={iconProfile}
        />
        <SidebarItem
          name="Job Request"
          onClick={() => navigate("/department_head/job_request")}
          image={iconRequest}
        />
        <SidebarItem
          name="Job Ongoing"
          onClick={() => navigate("/department_head/job_ongoing")}
          image={iconRequest}
        />
        <SidebarItem
          name="Job Completed"
          onClick={() => navigate("/department_head/job_completed")}
          image={iconRequest}
        />

        <SidebarItem
          name="Employee"
          onClick={() => navigate("/department_head/employee")}
          image={iconEmployee}
        />
        <SidebarItem
          name="Report"
          onClick={() => navigate("/department_head/report")}
          image={iconReport}
        />
        <SidebarItem
          name="Referral"
          onClick={() => navigate("/department_head/referral")}
          image={iconReport}
        />
        <SidebarItem
          name="History"
          onClick={() => navigate("/department_head/history")}
          image={iconDate}
        />
        <SidebarItem
          name="Certificate of Job Completion"
          onClick={() =>
            navigate("/department_head/approving_of_job_completion")
          }
          image={iconRequest}
        />
      </SideBar>

      <MainBody>
        <HorizontalNavBar />
        {otherContent ? <Outlet /> : <ContentDashboard />}
      </MainBody>
    </div>
  );
}
