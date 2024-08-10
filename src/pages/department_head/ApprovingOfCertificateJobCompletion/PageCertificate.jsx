import { Outlet, useOutlet } from "react-router-dom";
import ContentCertificate from "./ContentCertificate";

export default function Approving() {
  const otherContent = useOutlet(); // Get the current outlet

  return (
    <>
      {otherContent ? (
        <Outlet /> // Render nested routes if present
      ) : (
        <>
          <ContentCertificate />
        </>
      )}
    </>
  );
}
