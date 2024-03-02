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
  const [selectedValue, setSelectedValue] = useState(doctor.gender)

  const [services, setServices] = useState([])
  useEffect(() => {
    const getAllServices = async () => {
      const services = await getServices()
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
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={doctor.name}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          onChange={handleChange}
          value={doctor.image}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={doctor.email}
        />
        <label htmlFor="experience">Experience:</label>
        <input
          id="experience"
          type="text"
          onChange={handleChange}
          value={doctor.experience}
        />
        <label htmlFor="specialization">Specialization:</label>
        <input
          id="specialization"
          type="text"
          onChange={handleChange}
          value={doctor.specialization}
        />
        <label htmlFor="gender">Gender:</label>
        <select onChange={handleChange} id="gender" value={doctor.gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="service">Service:</label>
        <select id="service" onChange={handleChange} value={doctor.service}>
          {services.map((service, index) => (
            <option key={index} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
        <label htmlFor="schedule.start">Start Time:</label>
        <input
          type="time"
          id="schedule.start"
          //   value={doctor.schedule.start}
          onChange={handleChange}
        />

        <label htmlFor="schedule.end">End Time:</label>
        <input
          type="time"
          id="schedule.end"
          //   value={doctor.schedule.end}
          onChange={handleChange}
        />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  )
}

export default AddDoctor
