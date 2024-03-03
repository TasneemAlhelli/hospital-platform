import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoctor } from '../services/doctors'

const DoctorDetails = () => {
  let { id } = useParams()
  const [doctor, setDoctor] = useState({})
  useEffect(() => {
    const getOneDoctor = async (id) => {
      const doctor = await getDoctor(id)
      setDoctor(doctor)
    }
    getOneDoctor(id)
  }, [])

  return (
    <div>
      <img src={doctor._id} alt={doctor.name} />
      <h1>{doctor.name}</h1>
      <h3>
        {doctor.specialization} - {doctor.experience}
      </h3>
    </div>
  )
}

export default DoctorDetails
