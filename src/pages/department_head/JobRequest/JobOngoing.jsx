import { Outlet, useOutlet } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";

export default function JobOngoing() {
  const otherContent = useOutlet(); // Get the current outlet

  return (
    <>
      {otherContent ? (
        <Outlet /> // Render nested routes if present
      ) : (
        <SearchBar title="Job Ongoing" showInput={true} /> // Fallback component
      )}
    </>
  );
}
