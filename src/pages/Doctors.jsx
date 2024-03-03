import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getServices, getService } from '../services/services'
import { getDoctor } from '../services/doctors'

import Doctor from '../components/Doctor'

const Doctors = () => {
  const [services, setServices] = useState([])
  const [serachResualt, setSerachResualt] = useState()
  const [doctors, setDoctors] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [doctorSelectedDisable, setDoctorSelectedDisable] = useState(true)
  const handleChangeService = async () => {
    setDoctorSelectedDisable(false)
    const DoctorsByService = await getService(event.target.value)
    console.log('Service', DoctorsByService)
    setDoctors(DoctorsByService.doctors)
    console.log('Doctors', DoctorsByService.doctors)
  }
  const handleChangedoctor = async () => {
    console.log('hiiiii', event.target.value)
    if (event.target.value === 'allDoctor') {
      setSerachResualt(doctors)
      console.log('doctor', doctors)
    } else {
      const selectedDoctor = await getDoctor(event.target.value)
      setSerachResualt(selectedDoctor)
      console.log('doctor', selectedDoctor)
    }
    toggleSearched(true)
  }
  const handelClick = () => {
    toggleSearched(false)
  }
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

      <select id="service" onChange={handleChangeService}>
        <option selected disabled>
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
        onChange={handleChangedoctor}
        disabled={doctorSelectedDisable}
      >
        <option selected disabled>
          Select Doctor
        </option>
        <option value="allDoctor">All Doctor</option>

        {doctors.map((doctor) => (
          <option key={doctor._id} value={doctor._id}>
            {doctor.name}
          </option>
        ))}
      </select>
      <button onClick={handelClick}>Clear Filtter</button>
      {searched ? (
        <div>
          {serachResualt.length > 1 ? (
            <section className="DocSection">
              {serachResualt.map((d) => (
                <Doctor doctor={d} />
              ))}
            </section>
          ) : (
            <div>
              {' '}
              <h1 className="title">{serachResualt.service.name}</h1>
              <Doctor doctor={serachResualt} />
            </div>
          )}
        </div>
      ) : (
        services.map((service) => (
          <section key={service._id}>
            <h1 className="title">{service.name}</h1>
            <section className="DocSection">
              {service.doctors.map((doctor) => (
                <Doctor key={doctor._id} doctor={doctor} />
              ))}
            </section>
          </section>
        ))
      )}
    </div>
  )
}

export default Doctors
