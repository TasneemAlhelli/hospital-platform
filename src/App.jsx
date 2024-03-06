import './App.css'
import './App2.css'
import './App3.css'
import './App4.css'
import './question.css'

import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Appointment from './pages/Appointment'
import Service from './pages/Service'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import DoctorDetails from './pages/DoctorDetails'
import EditProfile from './pages/EditProfile'
import Profile from './pages/Profile'
import AddDoctor from './pages/AddDoctor'
import AddService from './pages/AddService'
import { useState, useEffect } from 'react'
import { CheckSesion } from './services/auth'
import Review from './pages/Review'
import Payment from './pages/Payment'
import AskDoctor from './pages/AskDoctor'
function App() {
  const [user, setUser] = useState({})
  const checkToken = async () => {
    const user = await CheckSesion()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  const handelEditProfile = (newUser) => {
    setUser(newUser)
  }
  const handleLogOut = () => {
    setUser({})
    localStorage.clear()
  }
  return (
    <div>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-an-appointment" element={<Appointment />} />
          <Route path="/services/:id" element={<Service />} />
          <Route path="/services" element={<Services user={user} />} />
          <Route path="/doctors" element={<Doctors user={user} />} />
          {/* <Route path="/doctors/:doctorId" element={<DoctorDetails />} /> */}
          <Route path="/doctor-details/:id" element={<DoctorDetails />} />
          {/* <Route path="/profile/:userrId/edit" element={<EditProfile />} /> */}
          <Route path="/ask-doctor" element={<AskDoctor />} />
          <Route
            path="/profile/edit"
            element={
              <EditProfile user={user} handelEditProfile={handelEditProfile} />
            }
          />
          {/* <Route path="/profile/:userId" element={<Profile />} /> */}
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/add-service" element={<AddService />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/checkout" element={<Payment />} />
          <Route path="/checkout" element={<Payment />} />
        </Routes>
      </main>

      <footer>
        {/* <Home /> */}
        <Footer />
      </footer>
    </div>
  )
}

export default App
