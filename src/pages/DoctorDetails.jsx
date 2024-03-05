import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoctor } from '../services/doctors'
import { Link } from 'react-router-dom'
import { getReviewsByDoctor } from '../services/reviews'

const DoctorDetails = () => {
  let { id } = useParams()
  const [doctor, setDoctor] = useState({})
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getOneDoctor = async () => {
      const doctor = await getDoctor(id)
      setDoctor(doctor)
    }
    const getDoctorReviews = async () => {
      const reviews = await getReviewsByDoctor(id)
      setReviews(reviews)
    }
    getOneDoctor()
    getDoctorReviews()
  }, [])

  return (
    <div className="card2">
      <div className="docCard">
        <div className="docTextContainer">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="docProfileImage"
          />
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
                Working Hours: Sun - Thu / {doctor.schedule.start} -{' '}
                {doctor.schedule.end}
              </p>
            ) : null}
          </div>

          <Link to="/book-an-appointment">
            <button className="moreDetailButton">Book Appointment</button>
          </Link>
        </div>
      </div>
      <div className="docCard">
        <h1>Reviews</h1>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id}>
              <h3>Patient: {review.appointment.user.name}</h3>
              <h4>{review.comment}</h4>
              {Array(review.rate).fill(
                <span className="star fa fa-star checked"></span>
              )}
            </div>
          ))
        ) : (
          <p>No Reviews Yet</p>
        )}
        <div></div>
      </div>
    </div>
  )
}

export default DoctorDetails
