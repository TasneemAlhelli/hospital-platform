import { Link } from 'react-router-dom'

const Doctors = () => {
  return (
    <div>
      <h1> OUR Doctors</h1>
      <h3>NAME</h3>
      <h4>specialization</h4>
      <Link to="/DoctorDetails">
        <button>More Details</button>
      </Link>
    </div>
  )
}

export default Doctors
