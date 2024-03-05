import { Link } from 'react-router-dom'
const Doctor = ({ doctor, review }) => {
  const rate = review ? Math.floor(review.avgRating) : null
  return (
    <Link
      to={`/doctor-details/${doctor._id}`}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
    >
      <div className="card">
        <div className="profileImage">
          <img src={doctor.image} alt={doctor.name} />
        </div>
        <div className="textContainer">
          <p className="name">{doctor.name}</p>
          <p className="rateSection">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className={`star fa fa-star${
                    rate && index < rate ? ' checked' : ''
                  }`}
                ></span>
              ))}{' '}
          </p>
        </div>
        <Link to="/book-an-appointment">
          <button className="moreDetailButton">Book Appointment</button>
        </Link>
      </div>
    </Link>
  )
}

export default Doctor
