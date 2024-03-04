import { useParams, Link } from 'react-router-dom'
import {
  deleteAppointment,
  getAppointmentsStatus
} from '../services/appointments'
import { getUserInfo } from '../services/user'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

const Profile = () => {
  const [completedappointments, setCompletedAppoitments] = useState([])
  const [scheduleappointments, setScheduleAppoitments] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [profile, setProfile] = useState({})
  const handelCancle = async (event) => {
    event.preventDefault()
    await deleteAppointment(event.target.value)
    // scheduleAppointments()
    setDeleted(true)
  }

  const complatedAppointments = async () => {
    const status = 'completed'
    const data = await getAppointmentsStatus(status)
    setCompletedAppoitments(data)
  }

  const scheduleAppointments = async () => {
    const status = 'schedule'
    const data = await getAppointmentsStatus(status)
    setScheduleAppoitments(data)
  }

  const userInfo = async () => {
    const data = await getUserInfo()
    setProfile(data)
    let currentDate = new Date()
    let birthDate = new Date(data.birthDate)
    let timeDiff = currentDate.getTime() - birthDate.getTime()
    let age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25))
  }

  useEffect(() => {
    userInfo()
    complatedAppointments()
    scheduleAppointments()
  }, [deleted])

  return (
    <div>
      <h1>Profile</h1>
      <h3>{profile.name}</h3>
      <h2>Completed Appointments</h2>
      {completedappointments.map((completedappointment) => (
        <div key={completedappointment._id}>
          <h3>{completedappointment.date}</h3>
          <h4>{completedappointment.time}</h4>
          <Link to={`/review/${completedappointment._id}`}>
            <button>Leave Review</button>
          </Link>
        </div>
      ))}
      <h2>schedule Appointments</h2>

      {scheduleappointments
        ? scheduleappointments.map((scheduleappointment) => (
            <div key={scheduleappointment._id}>
              <h3>{format(scheduleappointment.date, 'yyyy-MM-dd')}</h3>
              <h4>{scheduleappointment.time}</h4>
              <h4>{scheduleappointment.doctor.name}</h4>
              <button onClick={handelCancle} value={scheduleappointment._id}>
                Cansel appointment
              </button>
            </div>
          ))
        : null}
      <Link to="/profile/edit">
        <button>Edit prfile :</button>
      </Link>
    </div>
  )
}

export default Profile
