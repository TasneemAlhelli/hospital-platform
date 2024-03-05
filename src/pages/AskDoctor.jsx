import { getServices } from '../services/services'
import { useState, useEffect } from 'react'
import { createQuestion } from '../services/questions'

const AskDoctor = () => {
  const initalState = {
    service: '',
    title: '',
    content: ''
  }
  const [services, setServices] = useState([])
  const [formValues, setFormValues] = useState(initalState)

  useEffect(() => {
    const getAllServices = async () => {
      const { services } = await getServices()
      setServices(services)
    }
    getAllServices()
  }, [])
  const handelSubmit = async () => {
    event.preventDefault()
    await createQuestion(formValues)
  }
  const handleChange = async (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    })
  }
  return (
    <div>
      <h1>ASK ME</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Question Title"
          id="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Question"
          id="content"
          onChange={handleChange}
        />
        <label htmlFor="service"></label>
        <select
          id="service"
          class="addDocInput"
          placeholder="Service"
          onChange={handleChange}
          value={doctor.service}
        >
          <option value="" selected disabled>
            Select Service
          </option>
          {services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.name}
            </option>
          ))}
        </select>
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default AskDoctor
