import SearchBar from "../../../components/SearchBar";
import ReusableContent from "../../../components/ReusableContent";
import ProfileImageBox from "./ProfileImageBox";
import ProfileInformationBox from "./ProfileInformationBox";
import ProfileTab from "./ProfileTab";

export default function ProfilePage() {
  return (
    <>
      <SearchBar title="Profile" />

      <ReusableContent>
        <div className="flex justify-between items-start">
          <ProfileImageBox />
          <ProfileInformationBox>
            <ProfileTab />
          </ProfileInformationBox>
        </div>
      </ReusableContent>
    </>
  );
}
