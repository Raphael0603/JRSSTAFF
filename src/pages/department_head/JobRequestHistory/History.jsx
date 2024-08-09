import SearchBar from "../../../components/SearchBar";
import HistoryContent from "./HistoryContent";
import { useNavigate, Outlet, useOutlet } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();
  const otherContent = useOutlet();
  return (
    <>
      {otherContent ? (
        <Outlet /> // Render nested routes if present
      ) : (
        <>
          <SearchBar title="Job Request History" />
          <HistoryContent
            bgColor={`bg-blue-300`}
            title="Total of Finished Job Request"
            year={2024}
            count={41}
            onClick={() => navigate("/department_head/history/content")}
          />
        </>
      )}
    </>
  );
}
