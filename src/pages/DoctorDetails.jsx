import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDoctor } from "../services/doctors"
import { Link } from "react-router-dom"
const DoctorDetails = () => {
  let { id } = useParams()
  const [doctor, setDoctor] = useState({})
  useEffect(() => {
    const getOneDoctor = async (id) => {
      const doctor = await getDoctor(id)
      setDoctor(doctor)
    }
    getOneDoctor(id)
  }, [])

  return (
    <div className="card2">
      <div class="docCard">
        <div className="docTextContainer">
          <img src={doctor.image} alt={doctor.name} className="docProfileImage" />
          <div className="docDetails">
          <h1>{doctor.name}</h1>
          <p>Phone Number: {doctor.phone}</p>
          <p>Email: {doctor.email}</p>
          <p>Gender: {doctor.gender}</p>
          <p>Experience: {doctor.experience} years</p>
          {doctor.service ? (
            <p>Specialization: {doctor.service.specialization}</p>
            ) : null}
          {doctor.schedule ? (
            <p>
              Working Hours: Sun - Thu / {doctor.schedule.start} -{" "}
              {doctor.schedule.end}
            </p>
          ) : null}
          </div>

          <Link to="/book-an-appointment">
            <button className="moreDetailButton">Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails
