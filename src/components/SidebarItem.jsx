import HomeSidebarIcon from "/src/assets/images/iconSideBarHome.png";

export default function SidebarItem({ name, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group-[.active]:bg-blue-950 group-[.active]:text-white cursor-pointer flex items-center py-2 px-4 my-2 text-gray-300 hover:bg-blue-980 hover:text-gray-100 rounded-md"
    >
      <img src={HomeSidebarIcon} alt="Home Icon" className="w-4 h-4 mr-3" />
      <span className="text-sm">{name}</span>
    </div>
  );
}
