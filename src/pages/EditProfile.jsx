import { updateUserInfo } from '../services/appointments'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = ({ user, handelEditProfile }) => {
  let navigate = useNavigate()

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
  const [formValues, setFormValues] = useState(user)

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    })
  }
  const handelSubmit = async (event) => {
    event.preventDefault()
    const editUser = await updateUserInfo(user.id, formValues)
    handelEditProfile(editUser)
    navigate('/profile')
  }

  return (
    <div>
      <h1>EditProfile</h1>
      <form className="form" onSubmit={handelSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Name"
          id="name"
          onChange={handleChange}
          defaultValue={formValues.name}
          value={formValues.name}
        />
        <input
          type="Number"
          className="input"
          placeholder="CPR"
          id="cpr"
          onChange={handleChange}
          defaultValue={formValues.cpr}
        />
        <select
          id="gender"
          onChange={handleChange}
          defaultValue={formValues.gender}
        >
          <option selected disabled value="">
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          id="medicalConditions"
          onChange={handleChange}
          defaultValue={formValues.medicalConditions}
        >
          <option selected disabled value="">
            Select Your Medical Conditions
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="date"
          className="input"
          placeholder="Birth Date"
          id="birthDate"
          onChange={handleChange}
          defaultValue={new Date(formValues.birthDate)}
        />

        <button className="form-btn" type="submit">
          Edit account
        </button>
      </form>
    </div>
  )
}

export default EditProfile
