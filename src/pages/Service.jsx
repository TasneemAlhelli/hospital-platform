import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getService } from '../services/services'
import Doctor from '../components/Doctor'

const Service = () => {
  let { id } = useParams()
  let [service, setService] = useState({})
  useEffect(() => {
    const getOneService = async (id) => {
      const service = await getService(id)
      setService(service)
    }
    getOneService(id)
  }, [])
  return (
    <div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>

      <section>
        <h1 className="title">Doctors</h1>
        <section className="DocSection">
          {service.doctors
            ? service.doctors.map((doctor) => (
                <Doctor key={doctor._id} doctor={doctor} />
              ))
            : null}
        </section>
      </section>
    </div>
  )
}

export default Service
