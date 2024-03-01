import { useEffect, useState } from 'react'
import { getServices } from '../services/services'
import { Link } from 'react-router-dom'
const Services = () => {
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
      <h1>Our Services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <Link to={service._id}>
            <img src={service.image} alt="" />
            <h3>{service.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Services
