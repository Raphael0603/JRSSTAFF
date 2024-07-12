import DepartmentHeadDashboard from "../pages/department_head/DepartmentHeadDashboard";
import LogoJRS from "/src/assets/images/logo_JRS.png";

function SideBarMenu() {
  return (
    <a href={DepartmentHeadDashboard} className="flex items-center mb-4">
      <img
        src={LogoJRS}
        alt="Logo"
        className="w-30 h-20 rounded object-cover"
      />
    </a>
  );
}

export default SideBarMenu;
