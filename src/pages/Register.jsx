import { useState } from 'react'
import { RegisterUser } from '../services/auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)
  const [error, setError] = useState('')
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
    setFormValues({ ...formValues, [event.target.id]: event.target.value })
  }
  const handelSubmit = async (event) => {
    event.preventDefault()
    const res = await RegisterUser(formValues)
    if (res.status !== 200) {
      setError(res.data)
    } else {
      navigate('/login')
    }
  }
  return (
    <div className="signUpSection">
      <div className="signUp-form-container">
        <h1 className="signUpTitle">Sign Up</h1>
        <p className="appForm-Txt">Enter the fields below to get started</p>
        <form className="form" onSubmit={handelSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Name"
            id="name"
            onChange={handleChange}
            value={formValues.name}
            required
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            value={formValues.email}
            required
          />
          <input
            type="Number"
            className="input"
            placeholder="CPR"
            id="cpr"
            onChange={handleChange}
            value={formValues.cpr}
          />
          <select
            id="gender"
            onChange={handleChange}
            value={formValues.gender}
            className="input"
          >
            <option selected disabled value="">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="date"
            className="input"
            placeholder="Birth Date"
            id="birthDate"
            onChange={handleChange}
            value={formValues.birthDate}
            required
          />
          <select
            id="medicalConditions"
            onChange={handleChange}
            value={formValues.medicalConditions}
            className="input"
            required
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
            type="password"
            className="input"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            value={formValues.password}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="confirm Password"
            id="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
            required
          />
          {error ? <p className="error">{error}</p> : null}
          <button className="form-btn" type="submit">
            Create account
          </button>
        </form>
        <p className="sign-up-label">
          Already have an account?<span className="sign-up-link">Log in</span>
        </p>
        <div className="buttons-container">
          <div className="google-login-button">
            <svg
              className="google-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Sign up with Google</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
