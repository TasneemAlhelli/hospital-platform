import { getInterestedServices } from '../services/services'

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
