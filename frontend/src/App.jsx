import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/Admin/AdminDashboard';
import LoginHere from './components/LoginHere';
import EmpDashBoard from "./components/EmpDashBoard/EmpDashBoard"
import UserDashBoard from './components/User/UserDashBoard';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginHere/>}/>
        <Route index element={<UserDashBoard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/emp/dashboard'  element={<EmpDashBoard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
