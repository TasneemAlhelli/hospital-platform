import { getServices, getService } from '../services/services'
import { getDoctorSlot } from '../services/doctors'

import { useEffect, useState } from 'react'

const Appointment = () => {
  const [services, setServices] = useState([])
  const [doctors, setdoctors] = useState([])
  const [slot, setSlot] = useState([])
  useEffect(() => {
    const getAllServices = async () => {
      const services = await getServices()
      setServices(services)
      console.log(services)
    }
    getAllServices()
  }, [])

  const handleChangeService = async () => {
    const DoctorsByService = await getService(event.target.value)
    console.log('Service', DoctorsByService)
    setdoctors(DoctorsByService.doctors)
    console.log('Doctors', DoctorsByService.doctors)
  }
  const handleChangeDoctor = async () => {
    const avalibleSlot = await getDoctorSlot(event.target.value)
    setSlot(avalibleSlot)
    console.log('avalibleSlot', avalibleSlot)
  }
  return (
    <div>
      <h1>book an Appointment</h1>
      <form>
        <select id="service" onChange={handleChangeService}>
          {services.map((service, index) => (
            <option key={index} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
        <select id="doctor" onChange={handleChangeDoctor}>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor._id}>
              {doctor.name}
            </option>
          ))}
        </select>
        <input type="date"></input>
        <select>
          <option>9:00</option>
          <option>9:20</option>
          <option>9:40</option>
          <option>10:00</option>
          <option>10:20</option>
          <option>10:40</option>
        </select>
        <button>Book Appointment</button>
      </form>
    </div>
  )
}

export default Appointment
