import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import Admin from './Pages/Admin';
import UserAuth from './Pages/UserAuth';

import Hotel from './Pages/Hotel';

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/userlogin' element={<UserAuth/>}/>
      </Routes>
  )
}

export default App
