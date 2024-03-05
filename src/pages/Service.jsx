import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getService } from '../services/services'
import Doctor from '../components/Doctor'
import _ from 'lodash'

const Service = () => {
  let { id } = useParams()
  let [service, setService] = useState({})
  let [doctorReviews, setDoctorReviews] = useState([])

  useEffect(() => {
    const getOneService = async (id) => {
      const { service, doctorReviews } = await getService(id)
      setService(service)
      setDoctorReviews(doctorReviews)
    }
    getOneService(id)
  }, [])

  const getDoctorReview = (id) => {
    return doctorReviews.find((review) => _.isEqual(review._id, id))
  }

  return (
    <div>
      <section className="servPgContainer">
        <h1 className="servicePgDes">{service.name}</h1>
        <p className="servicePgDesP">{service.description}</p>
      </section>

      <section>
        <h1 className="title">Doctors</h1>
        <section className="DocSection">
          {service.doctors
            ? service.doctors.map((doctor) => (
                <Doctor
                  key={doctor._id}
                  doctor={doctor}
                  review={getDoctorReview(doctor._id) ?? null}
                />
              ))
            : null}
        </section>
      </section>
    </div>
  )
}

export default Service
