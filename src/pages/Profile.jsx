import { useParams, Link } from 'react-router-dom'
import { getAppointments, getUserInfo } from '../services/appointments'
import { useState, useEffect } from 'react'

const Profile = () => {
  let { userId } = useParams()
  const [appointments, setAppoitments] = useState([])
  const [profile, setProfile] = useState({})

  const allAppointments = async () => {
    const data = await getAppointments(userId)
    //setAppoitments(data)
    console.log('appointment', data)
  }

  const userInfo = async () => {
    const data = await getUserInfo(userId)
    //setProfile(data)
    console.log('user data', data)
    let currentDate = new Date()
    let birthDate = new Date(data.birthDate)
    let timeDiff = currentDate.getTime() - birthDate.getTime()
    let age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25))
    console.log('Age:', age)
  }
  useEffect(() => {
    userInfo()
    allAppointments()
  }, [])
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/profile/edit">
        <button>Edit prfile :</button>
      </Link>
    </div>
  )
}

export default Profile
