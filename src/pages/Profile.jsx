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
  const [age, setAge] = useState('')
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
    setAge(Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25)))
  }
  const [avatar, setAvatar] = useState(false)
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
          <h3>{profile.name}</h3>
          <img
            src={
              profile.gender == 'Female'
                ? 'https://img.freepik.com/premium-vector/career-nurse-icon-flat-illustration-career-nurse-vector-icon-isolated-white-background_98396-41414.jpg?w=740'
                : 'https://img.freepik.com/premium-vector/flat-doctor-avatar-website-chat-window_824631-1795.jpg?w=740'
            }
            alt=""
          />

          <p>Email: {profile.email}</p>
          <p>Gender:{profile.gender} </p>
          <p>Age : {age}</p>
          <p>CPR : {profile.cpr}</p>
          <p>Medical Conditions:{profile.medicalConditions} </p>
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
        {/* {toggleAppointments
          ? scheduleappointments.map((scheduleappointment) => (
              <div className="banner">
                <div className="reviewsCard">
                  <div className="imgWrapper">
                    <img src="./public/image/icons8-schedule-64.png"></img>
                  </div>
                  <span className="reviewText">
                    {scheduleappointment.doctor.name}
                  </span>
                  <span className="review">
                    {format(scheduleappointment.date, 'yyyy-MM-dd')}
                    {scheduleappointment.time}
                  </span>
                  <div className="reviewWrapper" key={scheduleappointment._id}>
                    <button
                      className="reviewBtn"
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
            ))} */}
        {toggleAppointments ? (
          scheduleappointments.length > 0 ? (
            scheduleappointments.map((scheduleappointment) => (
              <div className="banner" key={scheduleappointment._id}>
                <div className="reviewsCard">
                  <div className="imgWrapper">
                    <img
                      src="./public/image/icons8-schedule-64.png"
                      alt="Schedule Icon"
                    />
                  </div>
                  <span className="reviewText">
                    {scheduleappointment.doctor.name}
                  </span>
                  <span className="review">
                    {format(scheduleappointment.date, 'yyyy-MM-dd')}
                    {scheduleappointment.time}
                  </span>
                  <div className="reviewWrapper">
                    <button
                      className="reviewBtn"
                      onClick={handelCancle}
                      value={scheduleappointment._id}
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No scheduled appointments found.</p>
          )
        ) : completedappointments.length > 0 ? (
          completedappointments.map((completedappointment) => (
            <div className="banner" key={completedappointment._id}>
              <div className="reviewsCard">
                <div className="imgWrapper">
                  <img
                    src="./public/image/icons8-schedule-64.png"
                    alt="Schedule Icon"
                  />
                </div>
                <span className="reviewText">
                  {completedappointment.doctor.name}
                </span>
                <span className="review">
                  {format(completedappointment.date, 'yyyy-MM-dd')}
                  {completedappointment.time}
                </span>
                <div className="reviewWrapper">
                  <Link to={`/review/${completedappointment._id}`}>
                    <button className="reviewBtn">Review</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No completed appointments found.</p>
        )}
      </div>
    </div>
  )
}

export default Profile
