import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getServices, getService } from '../services/services'
import { getDoctor } from '../services/doctors'
import Doctor from '../components/Doctor'
import _ from 'lodash'

const Doctors = ({ user }) => {
  const [services, setServices] = useState([])
  const [doctors, setDoctors] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [doctorSelectedDisable, setDoctorSelectedDisable] = useState(true)
  const [doctorReviews, setDoctorReviews] = useState([])
  const [formValues, setFormValues] = useState({
    service: '',
    doctor: '',
    serviceName: ''
  })

  useEffect(() => {
    const getAllServices = async () => {
      const { services, doctorReviews } = await getServices()
      setDoctorReviews(doctorReviews)
      setServices(services)
    }
    getAllServices()
  }, [])

  const handleChange = async (event) => {
    if (event.target.id === 'service') {
      const { service } = await getService(event.target.value)
      setFormValues({
        ...formValues,
        [event.target.id]: service._id,
        serviceName: service.name,
        doctor: ''
      })
      setDoctors(service.doctors)
      setDoctorSelectedDisable(false)
    } else if (event.target.id === 'doctor') {
      setFormValues({
        ...formValues,
        [event.target.id]: event.target.value
      })
      if (event.target.value === 'allDoctor') {
        setSearchResult(doctors)
      } else {
        setSearchResult([await getDoctor(event.target.value)])
      }
      toggleSearched(true)
    }
  }

  const handelClick = () => {
    setDoctorSelectedDisable(true)
    toggleSearched(false)
    setFormValues({ service: '', doctor: '' })
  }

  const getDoctorReview = (id) => {
    return doctorReviews.find((review) => _.isEqual(review._id, id))
  }
  return (
    <div>
      <h1 className="docTitle">Our Doctors</h1>
      {/* {user && user.role === 'User' && (
        <div className="add-dev">
          <Link to="/add-service">
            <button className="add-button">Add Doctor</button>
          </Link>
        </div>
      )} */}
      <div className="filterSec">
        <select
          id="service"
          onChange={handleChange}
          value={formValues.service}
          className="filterInput"
        >
          <option selected disabled value="">
            Select Service
          </option>
          {services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
        <select
          id="doctor"
          onChange={handleChange}
          disabled={doctorSelectedDisable}
          value={formValues.doctor}
          className="filterInput"
        >
          <option selected disabled value="">
            Select Doctor
          </option>
          <option value="allDoctor">All Doctor</option>

          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>
              {doctor.name}
            </option>
          ))}
        </select>
        <button onClick={handelClick} className="filterBtn">
          Reset
        </button>
        {user && user.role === 'Admin' && (
          <Link to="/add-doctor">
            <button className="add-button">Add Doctor</button>
          </Link>
        )}
      </div>

      {searched ? (
        <section>
          <h1 className="title">{formValues.serviceName}</h1>
          <section className="DocSection">
            {searchResult.map((doctor) => (
              <Doctor
                key={doctor._id}
                doctor={doctor}
                user={user}
                review={getDoctorReview(doctor._id) ?? null}
              />
            ))}
          </section>
        </section>
      ) : (
        services.map((service) => (
          <section key={service._id}>
            <h1 className="title">{service.name}</h1>
            <section className="DocSection">
              {service.doctors.map((doctor) => (
                <Doctor
                  key={doctor._id}
                  doctor={doctor}
                  user={user}
                  review={getDoctorReview(doctor._id) ?? null}
                />
              ))}
            </section>
          </section>
        ))
      )}
    </div>
  )
}

export default Doctors
