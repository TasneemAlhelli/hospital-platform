import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getService } from '../services/services'

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
      <h1>{service.name} </h1>
      <p>{service.description}</p>

      <section>
        {/* doctors */}
      </section>
    </div>
  )
}

export default Service
