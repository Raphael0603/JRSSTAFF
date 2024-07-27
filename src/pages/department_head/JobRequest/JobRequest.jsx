import { Outlet, useOutlet } from "react-router-dom";
import SearchBar from "../../../components/SearchBar";
import Table from "../../../components/Table";

export default function JobRequest() {
  const otherContent = useOutlet(); // Get the current outlet

  return (
    <>
      {otherContent ? (
        <Outlet /> // Render nested routes if present
      ) : (
        <>
          <SearchBar title="Job Request" showInput={true} />
          <Table />
        </>
      )}
    </>
  );
}
