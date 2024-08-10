import { Outlet, useOutlet } from "react-router-dom";
import ContentEmployee from "./ContentEmployee";

export default function Employee() {
  const otherContent = useOutlet();

  return (
    <>
      {otherContent ? (
        <Outlet /> // Render nested routes if present
      ) : (
        <ContentEmployee />
      )}
    </>
  );
}
