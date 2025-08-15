import {BrowserRouter,Routes, Route} from 'react-router-dom'
import AdminLogin from './components/Admin/AdminLogin'
import './App.css'
import AdminDashboard from './components/Admin/AdminDashboard';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminDashboard/>} />
        <Route index element={<AdminDashboard />} />
        {/* <Route path='/admin/dashboard' element={<AdminDashboard />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
