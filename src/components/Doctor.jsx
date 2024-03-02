import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoctor } from '../services/doctors'

const Doctor = () => {
  let { doctorId } = useParams()
  let [doctor, setDoctor] = useState({})
  useEffect(() => {
    const getOneDoctor = async (doctorId) => {
      const doctor = await getDoctor(doctorId)
      setDoctor(doctor)
    }
    getOneDoctor(doctorId)
  }, [])

  return <div></div>
}

export default Doctor
