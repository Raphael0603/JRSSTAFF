import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DepartmentHeadDashboard from "./pages/department_head/Dashboard/DepartMentHeadDashboard";
import Report from "./pages/department_head/SendReport/Report";
import JobRequest from "./pages/department_head/JobRequest/JobRequest";
import Login from "./pages/LogIn";
import JobAssign from "./pages/department_head/JobRequest/JobAssign";
import JobOngoing from "./pages/department_head/JobRequest/JobOngoing";
import JobCompleted from "./pages/department_head/JobRequest/JobCompleted";
import Employee from "./pages/department_head/Employee/Employee";
import Referral from "./pages/department_head/Referral/Referral";
import ProfilePage from "./pages/department_head/Profile/ProfilePage";
import Aprroving from "./pages/department_head/ApprovingOfCertificateJobCompletion/Approving";
import History from "./pages/department_head/JobRequestHistory/History";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for Login*/}
        <Route path="/login" element={<Login />} />

        {/* Routes for Department Head */}
        <Route path="/department_head" element={<DepartmentHeadDashboard />}>
          <Route path="myprofile" element={<ProfilePage />} />
          <Route path="report" element={<Report />} />
          <Route path="employee" element={<Employee />} />
          <Route path="referral" element={<Referral />} />
          <Route path="history" element={<History />} />
          <Route path="approving_of_job_completion" element={<Aprroving />} />

          <Route path="job_request" element={<JobRequest />}>
            <Route path="assign" element={<JobAssign />} />
            <Route path="ongoing" element={<JobOngoing />} />
            <Route path="completed" element={<JobCompleted />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
