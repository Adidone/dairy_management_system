import {BrowserRouter,Routes, Route} from 'react-router-dom'
import AdminLogin from './components/Admin/AdminLogin'
import './App.css'
import AdminDashboard from './components/Admin/AdminDashboard';
import AddFarmer from './components/Menu/AddFarmer';
import AddEmployee from './components/Menu/AddEmployee';
import ManageFarmer from './components/Menu/ManageFarmer';
import ManageEmploye from './components/Menu/ManageEmploye';
import RegisterCattle from './components/Menu/RegisterCattle';
import ViewComplaints from './components/Menu/ViewComplaints';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminDashboard/>} />
        <Route index element={<AdminDashboard />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/addfarmer' element={<AddFarmer/>} />
        <Route path='/admin/addemploye' element={<AddEmployee/>} />
        <Route path='/admin/managefarmer' element={<ManageFarmer/>} />
        <Route path='/admin/manageemploye' element={<ManageEmploye/>}/>
        <Route path='/admin/registercattle' element={<RegisterCattle/>}/>
        <Route path='/admin/showcomplaints' element={<ViewComplaints/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
