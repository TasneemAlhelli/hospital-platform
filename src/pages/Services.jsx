import { useEffect, useState } from 'react'
import { getServices } from '../services/services'
import { Link } from 'react-router-dom'
const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    const getAllServices = async () => {
      const { services } = await getServices()
      setServices(services)
    }
    getAllServices()
  }, [])

  return (
    <div>
      <h1 className="servTitlePage">Our Services</h1>
      <section className="servSection">
        {services.map((service) => (
          <Link key={service._id} to={service._id}>
            <div className="servCard">
              <div className="servProfileImage">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="servTextContainer">
                <p className="servName">{service.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Services
