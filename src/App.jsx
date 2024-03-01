import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Appointment from './pages/Appointment'
// import Service from './pages/Service'
// import Services from './pages/Services'
// import Doctors from './pages/Doctors'
// import DoctorDetails from './pages/DoctorDetails'
// import EditProfile from './pages/EditProfile'
import Profile from './pages/Profile'
function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book-an-appointment" element={<Appointment />} />
        <Route path="/services/:serviceId/doctors" element={<Service />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="/profile/:userrId/edit" element={<EditProfile />} /> */}
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
