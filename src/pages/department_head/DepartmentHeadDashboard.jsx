import Logo from "../../components/Logo";
import Profile from "./components/SideBarProfile";
import Icons from "./components/SideBarIcons";
import HorizontalNavBar from "../../components/HorizontalNavBar";
import StatusCard from "./components/StatusCard";
import NotificationAndCalendar from "../../components/NotificationAndCalendar";
import SideBar from "./components/SideBar";
import MainBody from "./components/MainBody";
import PageTitle from "../../components/PageTitle";

export default function DepartmentHeadDashboard() {
  return (
    <div className="text-gray-800 font-inter">
      <SideBar>
        <Logo />
        <Profile />
        <Icons />
      </SideBar>

      <MainBody>
        <HorizontalNavBar />
        <PageTitle />
        <StatusCard />
        <NotificationAndCalendar />
      </MainBody>
    </div>
  );
}
