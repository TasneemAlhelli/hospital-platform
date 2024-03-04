import { useState } from 'react'
import { createReview } from '../services/reviews'

const Review = ({ appointment, doctor }) => {
  const initalState = {
    appointment: '65e569229f6b638c1037fe13',
    doctor: '65e4ac2b5c9aa02da4d08f2b',
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
    console.log(review)
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
