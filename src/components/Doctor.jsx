import { Link } from 'react-router-dom'
const Doctor = ({ doctor }) => {
  return (
    <Link to={`/doctor-details/${doctor._id}`}>
      <img src={doctor.inage} alt="" />
      <h5>{doctor.name}</h5>
      <Link to="/book-an-appointment">
        <button>Book Appointment</button>
      </Link>
    </Link>
  )
}

export default Doctor
