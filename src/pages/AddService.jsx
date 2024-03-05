import { useState, useEffect } from "react"
import { addService } from "../services/services"

const AddService = () => {
  const options = [
    "General Medicine",
    "Pediatrics",
    "Obstetrics and Gynecology",
    "Urology",
    "Dentistry",
    "Dermatology",
    "Cardiology",
    "Orthopedics",
    "Psychiatry",
    "Physical Therapy",
    "Occupational Therapy",
    "Allergology",
    "other",
  ]
  const [service, setService] = useState([])

  const handleChange = (event) => {
    setService({ ...service, [event.target.id]: event.target.value })
  }

  const handelSubmit = (event) => {
    event.preventDefault()
    console.log("event", event)
    console.log("service", service)
    addService(service)
  }
  return (
    <div className="addDocSection">
      <div className="addDocForm-container">
        <p class="addDocTitle"> Add Service</p>
        <div>
          <form onSubmit={handelSubmit} class="addDocForm">
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              class="addDocInput"
              placeholder="Name"
              onChange={handleChange}
              value={service.name}
            />
            <label htmlFor="image"></label>
            <input
              id="image"
              type="text"
              class="addDocInput"
              placeholder="Image"
              onChange={handleChange}
              value={service.image}
            />
            <label htmlFor="description"></label>
            <input
              id="description"
              type="text"
              class="addDocInput"
              placeholder="Description"
              onChange={handleChange}
              value={service.description}
            />
            <label htmlFor="phone"></label>
            <input
              id="phone"
              type="text"
              class="addDocInput"
              placeholder="Phone Number"
              onChange={handleChange}
              value={service.phone}
            />
            <label htmlFor="price"></label>
            <input
              id="price"
              type="Number"
              class="addDocInput"
              placeholder="Price"
              onChange={handleChange}
              value={service.price}
            />
            <label htmlFor="genderInterest"></label>
            <select
              onChange={handleChange}
              id="gender"
              class="addDocInput"
              value={service.genderInterest}
            >
              <option value="" selected disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Both">Both</option>
            </select>
            <label htmlFor="specialization"></label>
            <select
              id="specialization"
              class="addDocInput"
              placeholder="Specialization"
              onChange={handleChange}
              value={service.specialization}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button type="submit" className="addDoc-form-btn">Add Service</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddService
