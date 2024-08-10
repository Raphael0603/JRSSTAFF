import SearchBar from "../../../components/SearchBar";
import ReusableContent from "../../../components/ReusableContent";
import ProfileContent from "./ContentProfile";

export default function ProfilePage() {
  return (
    <>
      <SearchBar title="Profile" />

      <ReusableContent>
        <ProfileContent />
        {/* <div className="flex justify-between items-start">
          <ProfileImageBox />

          <ProfileInformationBox>
            <Header content={otherContent ? <Outlet /> : <UserInformation />}>
              <div className="flex justify-end space-x-4">
                <ProfileTab
                  name="User Account"
                  onClick={() => navigate("/department_head/myprofile")}
                />
                <ProfileTab
                  name="Change Avatar"
                  onClick={() =>
                    navigate("/department_head/myprofile/change_avatar")
                  }
                />
                <ProfileTab
                  name="Change Password"
                  onClick={() =>
                    navigate("/department_head/myprofile/change_password")
                  }
                />
              </div>
            </Header>
          </ProfileInformationBox>
        </div> */}
      </ReusableContent>
    </>
  );
}
