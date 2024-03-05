import { getUserInfo, updateUserInfo } from '../services/user'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
const EditProfile = ({ user, handelEditProfile }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({})
  const [date, setDate] = useState('')

  useEffect(() => {
    const userInfo = async () => {
      const user = await getUserInfo()
      setFormValues({
        ...user,
        birthDate: format(new Date(user.birthDate), 'yyyy-MM-dd')
      })
      setDate(format(new Date(user.birthDate), 'yyyy-MM-dd'))
    }
    userInfo()
  }, [])

  const options = [
    'General Medicine',
    'Pediatrics',
    'Obstetrics and Gynecology',
    'Urology',
    'Dentistry',
    'Dermatology',
    'Cardiology',
    'Orthopedics',
    'Psychiatry',
    'Physical Therapy',
    'Occupational Therapy',
    'Allergology',
    'other'
  ]

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    })
  }
  const handelSubmit = async (event) => {
    event.preventDefault()
    const editUser = await updateUserInfo(formValues)
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
          value={formValues.cpr}
        />
        <select id="gender" onChange={handleChange} value={formValues.gender}>
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
          value={formValues.medicalConditions}
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
          defaultValue={date}
          value={formValues.birthDate}
        />

        <button className="form-btn" type="submit">
          Edit account
        </button>
      </form>
    </div>
  )
}

export default EditProfile
