import ProfilePic from "/src/assets/images/kennimg.jpg";

function SideBarProfile() {
  return (
    <div className="flex flex-col items-center text-center text-white mb-2 -mt-10">
      <img
        src={ProfilePic}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover mb-2"
      />
      <p className="font-semibold text-xs">Kenneth Jhun N. Balino</p>
      <p className="text-xs">Department Head</p>
    </div>
  );
}

export default SideBarProfile;
