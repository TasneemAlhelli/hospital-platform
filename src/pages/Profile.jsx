import { useParams } from 'react-router-dom'
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
  }
  useEffect(() => {
    userInfo()
    allAppointments()
  }, [])
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
