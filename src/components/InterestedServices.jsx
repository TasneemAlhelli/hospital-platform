import { getInterestedServices, getServices } from "../services/services"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const InterestedServices = () => {
  const [interestedServices, setInterestedServices] = useState([])

  useEffect(() => {
    getAllServices()
  }, [])

  const getAllServices = async () => {
    const token = localStorage.getItem("token")
    let services = []
    if (token) {
      services = await getInterestedServices()
    } else {
      services = await getServices()
      services = services.slice(0, 4)
    }
    setInterestedServices(services)
  }

  return (
    <div>
      <h1 className="servTitle">Featured Services</h1>
      <section className="servSection">
        {interestedServices.map((service) => (
          <Link key={service._id} to={`/services/${service._id}`}>
            <div className="servCard">
              <div className="servProfileImage">
                <img src={service.image} alt={service._id} />
              </div>
              <div className="servTextContainer">
                <p className="servName">{service.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <div className="ViewMoreServBtn">
        <Link to="/services">
          <button className="viewMoreBtn">
            <span>View More</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default InterestedServices
