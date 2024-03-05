import { useParams, Link } from "react-router-dom"
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
    <div className="profilePosition">
      <h1 className="profileTitle">Profile</h1>
      <div className="profileCard">
        <div>
          <Link to="/profile/edit">
            <button className="profileBtn">Edit Profile</button>
          </Link>
        </div>
        <div>
          <h3>Patient Name</h3>
          <img src="" alt="" />
          <p>Phone Number: </p>
          <p>Email: </p>
          <p>Gender: </p>
          <p>Experience: 12 years</p>
        </div>
      </div>

      <h1 className="appTitle">Appointments</h1>
      <div className="profileCard">
        <div className="btn-container">
          <label className="switch btn-color-mode-switch">
            <input
              value="1"
              id="color_mode"
              name="color_mode"
              type="checkbox"
            />
            <label
              className="btn-color-mode-switch-inner"
              data-off="Completed"
              data-on="Scheduled"
              for="color_mode"
            ></label>
          </label>
        </div>
        <div className="banner">
          <div class="reviewsCard">
            <div class="imgWrapper">
              <img src="./public/image/icons8-schedule-64.png"></img>
            </div>

            <div class="reviewWrapper">
              <span class="reviewText">Description</span>
              <p class="review">pspspspsps</p>
            </div>

            <button class="reviewBtn">Review</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
