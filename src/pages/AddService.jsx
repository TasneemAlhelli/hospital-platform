import { useState, useEffect } from 'react'

const AddService = () => {
  const options = [
    'diabetes',
    'hypertension',
    'asthma',
    'arthritis',
    'cancer',
    'allergies',
    'heart disease',
    'mental health conditions',
    'other'
  ]

  const [service, setService] = useState([])

  const handleChange = (event) => {
    setService({ ...doctor, [event.target.id]: event.target.value })
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    console.log('event', event)

    // addService(doctor)
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={service.name}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          onChange={handleChange}
          value={service.image}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          onChange={handleChange}
          value={service.description}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          onChange={handleChange}
          value={service.phone}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="Number"
          onChange={handleChange}
          value={service.price}
        />
        <label htmlFor="genderInterest">Gender Interest:</label>
        <select
          onChange={handleChange}
          id="gender"
          value={service.genderInterest}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Both">Both</option>
        </select>
        <label htmlFor="specialization">Specialization:</label>
        <select
          id="specialization"
          onChange={handleChange}
          value={service.specialization}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">Add Service</button>
      </form>
    </div>
  )
}

export default AddService
