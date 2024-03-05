import { addDoctor } from '../services/doctors'
import { getServices } from '../services/services'
import { useState, useEffect } from 'react'

const AddDoctor = () => {
  const initial = {
    name: '',
    email: '',
    gender: ''
  }
  const [doctor, setDoctor] = useState(initial)
  const [services, setServices] = useState([])

  useEffect(() => {
    const getAllServices = async () => {
      const { services } = await getServices()
      console.log(services)
      setServices(services)
    }
    getAllServices()
  }, [])

  const handleChange = (event) => {
    setDoctor({ ...doctor, [event.target.id]: event.target.value })
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    console.log('event', event)

    addDoctor(doctor)
  }
  return (
    <div className="addDocSection">
      <div class="addDocForm-container">
        <p class="addDocTitle"> Add a Doctor</p>
        <div>
          <form onSubmit={handelSubmit} class="addDocForm">
            <label htmlFor="name">
              <input
                id="name"
                type="text"
                class="addDocInput"
                placeholder="Name"
                onChange={handleChange}
                value={doctor.name}
              />
            </label>

            <label htmlFor="image"></label>
            <input
              id="image"
              type="text"
              class="addDocInput"
              placeholder="Image"
              onChange={handleChange}
              value={doctor.image}
            />
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              class="addDocInput"
              placeholder="Email"
              onChange={handleChange}
              value={doctor.email}
            />
            <label htmlFor="experience"></label>
            <input
              id="experience"
              type="text"
              class="addDocInput"
              placeholder="Experience"
              onChange={handleChange}
              value={doctor.experience}
            />
            <label htmlFor="specialization"></label>
            <input
              id="specialization"
              type="text"
              class="addDocInput"
              placeholder="Specialization"
              onChange={handleChange}
              value={doctor.specialization}
            />
            <label htmlFor="gender"></label>
            <select
              id="gender"
              class="addDocInput"
              onChange={handleChange}
              value={doctor.gender}
            >
              <option value="" selected disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <label htmlFor="service"></label>
            <select
              id="service"
              class="addDocInput"
              placeholder="Service"
              onChange={handleChange}
              value={doctor.service}
            >
              <option value="" selected disabled>
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
                id="schedule.start"
                class="addDocInput"
                placeholder="Start-Time"
                //   value={doctor.schedule.start}
                onChange={handleChange}
              />

              <label htmlFor="schedule.end">End Time:</label>
              <input
                type="time"
                id="schedule.end"
                class="addDocInput"
                placeholder="End-Time"
                //   value={doctor.schedule.end}
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
