import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DepartmentHeadDashboard from "./pages/department_head/Dashboard/DepartMentHeadDashboard";
import Report from "./pages/department_head/SendReport/Report";
import Login from "./pages/LogIn";
import JobAssign from "./pages/department_head/JobRequest/JobAssign";
import JobOngoing from "./pages/department_head/JobRequest/JobOngoing";
import JobCompleted from "./pages/department_head/JobRequest/JobCompleted";
import Employee from "./pages/department_head/Employee/Employee";
import Referral from "./pages/department_head/Referral/Referral";
import ProfilePage from "./pages/department_head/Profile/ProfilePage";
import Approving from "./pages/department_head/ApprovingOfCertificateJobCompletion/Approving";
import History from "./pages/department_head/JobRequestHistory/History";
import JobAssignView from "./pages/department_head/JobRequest/JobAssignView";
import Remarks from "./pages/department_head/JobRequest/Remarks";
import JobOngoingView from "./pages/department_head/JobRequest/JobOngoingView";
import JobCompletedView from "./pages/department_head/JobRequest/JobCompletedView";
import EmployeeView from "./pages/department_head/Employee/EmployeeView";
import EmployeeHistory from "./pages/department_head/Employee/EmployeeHistory";
import EmployeeHistoryView from "./pages/department_head/Employee/EmployeeHistoryView";
import ReportView from "./pages/department_head/SendReport/ReportView";
import SendReportForm from "./pages/department_head/SendReport/SendReportForm";
import AddEmployee from "./pages/department_head/Employee/AddEmployee";
import ReferralJobRequestView from "./pages/department_head/Referral/ReferralJobRequestFormView";
import HistoryContentView from "./pages/department_head/JobRequestHistory/HistoryContentView";
import HistoryContentViewInformation from "./pages/department_head/JobRequestHistory/HistoryContentViewInformation";
import ApprovingContent from "./pages/department_head/ApprovingOfCertificateJobCompletion/ApprovingContent";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for Login*/}
        <Route path="/login" element={<Login />} />

        {/* Routes for Department Head */}
        <Route path="/department_head" element={<DepartmentHeadDashboard />}>
          {/* Routes for Profile */}
          <Route path="myprofile" element={<ProfilePage />} />
          {/* Routes for Report */}
          <Route path="report" element={<Report />}>
            <Route path="view" element={<ReportView />} />
            <Route path="send_report" element={<SendReportForm />} />
            <Route path="employee" element={<AddEmployee />} />
          </Route>
          {/* Routes for Employee */}
          <Route path="employee" element={<Employee />}>
            <Route path="add" element={<AddEmployee />} />
            <Route path="view" element={<EmployeeView />} />
            <Route path="history" element={<EmployeeHistory />}>
              <Route path="view" element={<EmployeeHistoryView />} />
            </Route>
          </Route>

          {/* Routes for Referral */}
          <Route path="referral" element={<Referral />}>
            <Route path="view" element={<ReferralJobRequestView />} />
          </Route>

          {/* Routes for History */}
          <Route path="history" element={<History />}>
            <Route path="content" element={<HistoryContentView />}>
              <Route
                path="information"
                element={<HistoryContentViewInformation />}
              />
            </Route>
          </Route>

          {/* Routes for Job Request  */}

          <Route path="job_assign" element={<JobAssign />}>
            <Route path="view" element={<JobAssignView />} />
            <Route path="remarks" element={<Remarks />} />
          </Route>

          {/* Routes for Job Ongoing  */}
          <Route path="job_ongoing" element={<JobOngoing />}>
            <Route path="view" element={<JobOngoingView />} />
          </Route>

          {/* Routes for Job Completed  */}
          <Route path="job_completed" element={<JobCompleted />}>
            <Route path="view" element={<JobCompletedView />} />
          </Route>

          {/* Routes for Aprroving of Job Completion  */}
          <Route path="approving_of_job_completion" element={<Approving />}>
            <Route path="content" element={<ApprovingContent />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
