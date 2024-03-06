import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addAppointment } from '../services/appointments'

const Payment = () => {
  let navigate = useNavigate()
  const location = useLocation()
  const [appointmentDetails, setAppointmentDetails] = useState({})

  useEffect(() => {
    setAppointmentDetails(location.state.appointment ?? {})
  }, [])

  const initialState = {
    cardNumber: '',
    name: '',
    expiry: '',
    pin: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = () => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    })
  }

  const pay = async (event) => {
    event.preventDefault()
    const appointment = await addAppointment(appointmentDetails)
    navigate('/profile')
  }

  return (
    <div className="app-form">
      <div className="appForm-container">
        <h1 className="appForm-title">Payment</h1>
        <form className="appForm" onSubmit={pay}>
          <input
            type="number"
            className="input"
            id="cardNumber"
            minLength="16"
            maxLength="19"
            placeholder="Card Number"
            value={formValues.cardNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Card Holders Name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <input
            type="month"
            className="input"
            id="expiry"
            value={formValues.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="input"
            maxLength="4"
            id="pin"
            placeholder="PIN"
            value={formValues.pin}
            onChange={handleChange}
            required
          />
          <p>Amount: {appointmentDetails.price} BHD</p>
          <button type="submit" className="appForm-btn">
            Pay
          </button>
        </form>
      </div>
    </div>
  )
}

export default Payment
