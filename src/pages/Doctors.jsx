import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getServices } from '../services/services'
import Doctor from '../components/Doctor'

const Doctors = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const getAllServices = async () => {
      const services = await getServices()
      setServices(services)
    }
    getAllServices()
  }, [])

  return (
    <div>
      <h1 className="title">Our Doctors</h1>
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
