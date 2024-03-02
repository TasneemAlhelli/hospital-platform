import { Link } from 'react-router-dom'
const Doctor = ({ doctor }) => {
  return (
    <Link to={`/doctor-details/${doctor._id}`}>
      <div className="card">
        <div className="profileImage">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <div className="textContainer">
          <p className="name">{doctor.name}</p>
          <p className="specialization">{doctor.experience} years experience</p>
        </div>
        <Link to="/book-an-appointment">
          <button className="moreDetailButton">Book Appointment</button>
        </Link>
      </div>
    </Link>
  )
}

export default Doctor
