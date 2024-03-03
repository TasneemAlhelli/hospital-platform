import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getServices, getService } from '../services/services'
import Doctor from '../components/Doctor'

const Doctors = () => {
  const [services, setServices] = useState([])
  const [serachResualt, setSerachResualt] = useState([])
  const [doctors, setDoctors] = useState([])
  const [searched, toggleSearched] = useState(false)

  const handleChangeService = async () => {
    const DoctorsByService = await getService(event.target.value)
    console.log('Service', DoctorsByService)
    setDoctors(DoctorsByService.doctors)
    console.log('Doctors', DoctorsByService.doctors)
  }
  const handleChangedoctor = async () => {
    toggleSearched(true)
    setSerachResualt(event.target.value)
    console.log(serachResualt)
  }

  useEffect(() => {
    const getAllServices = async () => {
      const services = await getServices()
      setServices(services)
      // console.log(services.map((service) => service.doctors))
    }
    getAllServices()
  }, [])

  return (
    <div>
      <h1 className="title">Our Doctors</h1>

      <select id="service" onChange={handleChangeService}>
        {services.map((service, index) => (
          <option key={index} value={service._id}>
            {service.name}
          </option>
        ))}
      </select>
      <select id="doctor" onChange={handleChangedoctor}>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor._id}>
            {doctor.name}
          </option>
        ))}
      </select>
      {services
        ? services.map((service) => (
            <section key={service._id}>
              <h1 className="title">{service.name}</h1>
              <section className="DocSection">
                {service.doctors.map((doctor) => (
                  <Doctor key={doctor._id} doctor={doctor} />
                ))}
              </section>
            </section>
          ))
        : null}
    </div>
  )
}

export default Doctors
