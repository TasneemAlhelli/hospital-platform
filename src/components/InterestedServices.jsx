import { getInterestedServices } from '../services/services'
import { useState, useEffect } from 'react'
const InterestedServices = () => {
  const [interestedServices, setInterestedServices] = useState([])

  useEffect(() => {
    getAllServices()
  }, [])

  const getAllServices = async () => {
    const services = await getInterestedServices()
    setInterestedServices(services)
  }

  return (
    <div>
      <section>
        <h1>Services</h1>
      </section>
    </div>
  )
}

export default InterestedServices
