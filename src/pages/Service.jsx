import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getService } from '../services/services'

const Service = () => {
  let { id } = useParams()
  let [service, setService] = useState({})
  useEffect(() => {
    const getOneService = async (id) => {
      const service = await getService(id)
      setService(service)
      console.log(service)
    }
    getOneService(id)
  }, [])
  return (
    <div>
      <h1>{service.name} </h1>
      <p>{service.description}</p>

      <section>
        <h2>Doctors</h2>
        {service.doctors
          ? service.doctors.map((doctor) => (
              <div key={doctor._id}>
                <Link to={`/doctor-details/${doctor._id}`}>
                  <img src={doctor.inage} alt="" />
                  <h5>{doctor.name}</h5>
                  <Link to="/book-an-appointment">
                    <button>Book Appointment</button>
                  </Link>
                </Link>
              </div>
            ))
          : null}
      </section>
    </div>
  )
}

export default Service
