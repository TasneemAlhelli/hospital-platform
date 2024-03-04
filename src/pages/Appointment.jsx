import { getServices, getService } from "../services/services"
import { getDoctorSlot } from "../services/doctors"

import { useEffect, useState } from "react"

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
    console.log("Service", DoctorsByService)
    setdoctors(DoctorsByService.doctors)
    console.log("Doctors", DoctorsByService.doctors)
  }
  const handleChangeDoctor = async () => {
    const avalibleSlot = await getDoctorSlot(event.target.value)
    setSlot(avalibleSlot)
    console.log("avalibleSlot", avalibleSlot)
  }
  return (
    <div className="app-form">
    <div className="appForm-container">
      <h1 className="appForm-title">Book an Appointment</h1>
      <form className="appForm">
        <select className="appForm-input" onChange={handleChangeService}>
          {services.map((service, index) => (
            <option key={index} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
        <select className="appForm-input" onChange={handleChangeDoctor}>
          {doctors.map((doctor, index) => (
            <option key={index} value={doctor._id}>
              {doctor.name}
            </option>
          ))}
        </select>
        <input type="date" className="appForm-input"></input>
        <select className="appForm-input">
          <option>9:00</option>
          <option>9:20</option>
          <option>9:40</option>
          <option>10:00</option>
          <option>10:20</option>
          <option>10:40</option>
        </select>
        <div>
          <form class="appForm">
            <button className="appForm-btn">Book Appointment</button>
          </form>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Appointment
