import SearchBar from "../../../components/SearchBar";
import ReusableContent from "../../../components/ReusableContent";
import ProfileImageBox from "./ProfileImageBox";
import ProfileInformationBox from "./ProfileInformationBox";
import ProfileTab from "./ProfileTab";
import UserInformation from "./UserInformation";
import Header from "./Header";
import { useNavigate, Outlet, useOutlet } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const otherContent = useOutlet();
  return (
    <>
      <SearchBar title="Profile" />

      <ReusableContent>
        <div className="flex justify-between items-start">
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
        </div>
      </ReusableContent>
    </>
  );
}
