import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/system_admin/department_head/staff/requestor/Dashboard";
import DepartmentHeadDashboard from "./pages/department_head/DepartmentHeadDashboard";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" />
        <Route
          path="/department_head/dashboard"
          element={<DepartmentHeadDashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
