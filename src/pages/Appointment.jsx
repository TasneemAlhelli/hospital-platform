import { getServices, getService } from '../services/services'
import { getDoctorSlot } from '../services/doctors'
import { addAppointment } from '../services/appointments'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

const Appointment = () => {
  let navigate = useNavigate()

  const initalState = {
    service: '',
    doctor: '',
    date: '',
    time: '',
    notes: ''
  }

  const [formValues, setFormValues] = useState(initalState)

  const [services, setServices] = useState([])
  const [doctors, setdoctors] = useState([])
  const [slots, setSlots] = useState([])

  useEffect(() => {
    const getAllServices = async () => {
      const services = await getServices()
      setServices(services)
    }
    getAllServices()
  }, [])

  const handleChange = async (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    })
    if (event.target.id === 'service') {
      const DoctorsByService = await getService(event.target.value)
      setdoctors(DoctorsByService.doctors)
      setFormValues({
        ...formValues,
        date: '',
        time: '',
        doctor: '',
        [event.target.id]: event.target.value
      })
    } else if (event.target.id === 'doctor') {
      setFormValues({
        ...formValues,
        date: '',
        time: '',
        [event.target.id]: event.target.value
      })
    } else if (event.target.id === 'date') {
      setFormValues({
        ...formValues,
        time: '',
        [event.target.id]: event.target.value
      })
      const avalibleSlot = await getDoctorSlot(
        formValues.doctor,
        event.target.value
      )
      setSlots(avalibleSlot)
    } else {
      setFormValues({
        ...formValues,
        [event.target.id]: event.target.value
      })
    }
  }

  const bookAppointment = async (event) => {
    event.preventDefault()
    const appointment = await addAppointment(formValues)
    navigate('/profile')
  }

  return (
    <div className="app-form">
      <div className="appForm-container">
        <h1 className="appForm-title">Book An Appointment</h1>
        <form className="appForm" onSubmit={bookAppointment}>
          <select
            id="service"
            className="appForm-input"
            onChange={handleChange}
          >
            <option value="" selected disabled>
              Select Service
            </option>
            {services.map((service, index) => (
              <option key={index} value={service._id}>
                {service.name}
              </option>
            ))}
          </select>
          <select
            id="doctor"
            className="appForm-input"
            value={formValues.doctor}
            onChange={handleChange}
          >
            <option value="" selected disabled>
              Select Doctor
            </option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor._id}>
                {doctor.name}
              </option>
            ))}
          </select>
          <input
            id="date"
            type="date"
            className="appForm-input"
            min={format(new Date(), 'yyyy-MM-dd')}
            value={formValues.date}
            onChange={handleChange}
          ></input>

          <select
            id="time"
            className="appForm-input"
            value={formValues.time}
            onChange={handleChange}
          >
            <option value="" selected disabled>
              Select Time
            </option>
            {slots
              ? slots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))
              : null}
          </select>

          <textarea
            className="appForm-input"
            placeholder="Add Notes"
            id="notes"
            value={formValues.notes}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="appForm-btn">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  )
}

export default Appointment
