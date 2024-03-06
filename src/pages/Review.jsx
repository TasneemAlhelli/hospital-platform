import { useEffect, useState } from 'react'
import { createReview } from '../services/reviews'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Review = () => {
  let { id } = useParams()
  let navigate = useNavigate()

  const initalState = {
    appointment: id,
    hospitalRate: '',
    rate: '',
    comment: ''
  }

  const [formValues, setFormValues] = useState(initalState)

  const handleChange = () => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const review = await createReview(formValues)
    navigate(`/doctor-details/${review.doctor}`)
  }

  return (
    <div className="loginSection">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Leave Review</p>
          <input
            id="hospitalRate"
            className="input"
            type="number"
            min="1"
            max="5"
            placeholder="Rate General Assembly Hospital"
            onChange={handleChange}
            value={formValues.hospitalRate}
            required
          />
          <input
            id="rate"
            className="input"
            type="number"
            min="1"
            max="5"
            placeholder="Rate Doctor"
            onChange={handleChange}
            value={formValues.rate}
            required
          />
          <textarea
            id="comment"
            className="input"
            placeholder="Leave Comment"
            onChange={handleChange}
            value={formValues.comment}
          ></textarea>
          <button className="appForm-btn" type="submit">
            Add Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default Review
