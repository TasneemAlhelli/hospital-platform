import { addDoctor } from '../services/doctors'
import { getServices } from '../services/services'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const AddDoctor = () => {
  let navigate = useNavigate()
  const initial = {
    name: '',
    image: '',
    email: '',
    experience: 0,
    gender: '',
    service: '',
    schedule: {
      start: '',
      end: ''
    }
  }
  const [doctor, setDoctor] = useState(initial)
  const [services, setServices] = useState([])

  useEffect(() => {
    const getAllServices = async () => {
      const { services } = await getServices()
      setServices(services)
    }
    getAllServices()
  }, [])

  const handleChange = (event) => {
    if (event.target.id === 'start' || event.target.id === 'end') {
      setDoctor({
        ...doctor,
        ['schedule']: {
          ...doctor['schedule'],
          [event.target.id]: event.target.value
        }
      })
    } else {
      setDoctor({ ...doctor, [event.target.id]: event.target.value })
    }
  }

  const handelSubmit = async (event) => {
    event.preventDefault()

    const addedDoctor = await addDoctor(doctor)
    navigate(`/services/${addedDoctor.service}`)
  }
  return (
    <div className="addDocSection">
      <div className="addDocForm-container">
        <p className="addDocTitle"> Add a Doctor</p>
        <div>
          <form onSubmit={handelSubmit} className="addDocForm">
            <input
              id="name"
              type="text"
              className="addDocInput"
              placeholder="Name"
              onChange={handleChange}
              value={doctor.name}
              required
            />
            <input
              id="image"
              type="text"
              className="addDocInput"
              placeholder="Image"
              onChange={handleChange}
              value={doctor.image}
            />
            <input
              id="email"
              type="email"
              className="addDocInput"
              placeholder="Email"
              onChange={handleChange}
              value={doctor.email}
              required
            />
            <input
              id="experience"
              type="number"
              className="addDocInput"
              placeholder="Experience"
              onChange={handleChange}
              value={doctor.experience}
            />
            <label htmlFor="gender"></label>
            <select
              id="gender"
              className="addDocInput"
              onChange={handleChange}
              value={doctor.gender}
            >
              <option value="" selected disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              id="service"
              className="addDocInput"
              placeholder="Service"
              onChange={handleChange}
              value={doctor.service}
            >
              <option defaultValue="" value="" selected disabled>
                Select Service
              </option>
              {services.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.name}
                </option>
              ))}
            </select>
            <div className="timeSec">
              <label htmlFor="schedule.start">Start Time:</label>
              <input
                type="time"
                id="start"
                className="addDocInput"
                placeholder="Start-Time"
                onChange={handleChange}
              />
              <label htmlFor="schedule.end">End Time:</label>
              <input
                type="time"
                id="end"
                className="addDocInput"
                placeholder="End-Time"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="addDoc-form-btn">
              Add Doctor
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddDoctor
