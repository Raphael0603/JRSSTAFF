import { Outlet, useOutlet } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";

export default function JobCompleted() {
  const otherContent = useOutlet(); // Get the current outlet

  return (
    <>
      {otherContent ? (
        <Outlet /> // Render nested routes if present
      ) : (
        <SearchBar title="Job Completed" showInput={true} /> // Fallback component
      )}
    </>
  );
}
