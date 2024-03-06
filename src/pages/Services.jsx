import { useEffect, useState } from 'react'
import { getServices } from '../services/services'
import { Link } from 'react-router-dom'
const Services = ({ user }) => {
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
      {user && user.role === 'Admin' && (
        <div className="add-dev">
          <Link to="/add-service">
            <button className="add-button">Add Service</button>
          </Link>
        </div>
      )}
      <section className="servSection">
        {services.map((service) => (
          <Link
            key={service._id}
            to={service._id}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
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
