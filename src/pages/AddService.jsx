import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addService } from '../services/services'

const AddService = () => {
  let navigate = useNavigate()
  const initialState = {
    name: '',
    image: '',
    description: '',
    phone: '',
    price: '',
    gender: '',
    specialization: ''
  }

  const [service, setService] = useState(initialState)

  const handleChange = (event) => {
    setService({ ...service, [event.target.id]: event.target.value })
  }

  const handelSubmit = async (event) => {
    event.preventDefault()
    const addedService = await addService(service)
    navigate(`/services`)
  }

  return (
    <div className="addServSection">
      <div className="addServForm-container">
        <p className="addServTitle"> Add Service</p>
        <div>
          <form onSubmit={handelSubmit} className="addServForm">
            <input
              id="name"
              type="text"
              className="addServInput"
              placeholder="Name"
              onChange={handleChange}
              value={service.name}
              required
            />
            <label htmlFor="image"></label>
            <input
              id="image"
              type="text"
              className="addServInput"
              placeholder="Image"
              onChange={handleChange}
              value={service.image}
            />
            <input
              id="description"
              type="text"
              className="addServInput"
              placeholder="Description"
              onChange={handleChange}
              value={service.description}
              required
            />
            <input
              id="phone"
              type="text"
              className="addServInput"
              placeholder="Phone Number"
              onChange={handleChange}
              value={service.phone}
            />
            <input
              id="price"
              type="Number"
              className="addServInput"
              placeholder="Price"
              onChange={handleChange}
              value={service.price}
              required
            />
            <select
              onChange={handleChange}
              id="gender"
              className="addServInput"
              value={service.genderInterest}
              required
            >
              <option value="" selected disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="All">All</option>
            </select>
            <input
              id="specialization"
              type="text"
              className="addServInput"
              placeholder="Specialization"
              onChange={handleChange}
              value={service.specialization}
              required
            />
            <button type="submit" className="addServ-form-btn">
              Add Service
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddService
