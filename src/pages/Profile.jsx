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
  const [toggleAppointments, setToggleAppointments] = useState(true)
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
              data-off="Scheduled"
              data-on="Completed"
              for="color_mode"
              onClick={() => setToggleAppointments(!toggleAppointments)}
            ></label>
          </label>
        </div>
        {/* <div className="banner"> */}
        {/* <div class="reviewsCard"> */}
        {/* <div class="imgWrapper">
          <img src="./public/image/icons8-schedule-64.png"></img>
        </div> */}
        {toggleAppointments
          ? scheduleappointments.map((scheduleappointment) => (
              <div className="banner">
                <div class="reviewsCard">
                  <div class="imgWrapper">
                    <img src="./public/image/icons8-schedule-64.png"></img>
                  </div>
                  <span class="reviewText">
                    {scheduleappointment.doctor.name}
                  </span>
                  <span class="review">
                    {format(scheduleappointment.date, 'yyyy-MM-dd')}
                    {scheduleappointment.time}
                  </span>
                  <div class="reviewWrapper" key={scheduleappointment._id}>
                    <button
                      class="reviewBtn"
                      onClick={handelCancle}
                      value={scheduleappointment._id}
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          : completedappointments.map((completedappointment) => (
              <div className="banner">
                <div class="reviewsCard">
                  <div class="imgWrapper">
                    <img src="./public/image/icons8-schedule-64.png"></img>
                  </div>
                  <span class="reviewText">
                    {completedappointment.doctor.name}
                  </span>
                  <span class="review">
                    {format(completedappointment.date, 'yyyy-MM-dd')}
                    {completedappointment.time}
                  </span>
                  <div class="reviewWrapper" key={completedappointment._id}>
                    <Link to={`/review/${completedappointment._id}`}>
                      <button class="reviewBtn">Review</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Profile
