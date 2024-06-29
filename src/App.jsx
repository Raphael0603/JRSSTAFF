import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/system_admin/department_head/staff/requestor/Dashboard'
import LogIn from './pages/LogIn'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element = {<LogIn />}/>  
        <Route path='/dashboard' element = {<Dashboard />}/> 
        <Route path='/register'/> 
      </Routes>
    </Router>
    </>
  )
}

export default App
