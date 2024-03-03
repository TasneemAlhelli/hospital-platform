import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({ setUser }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    navigate('/')
  }
  return (
    <div>
      <h1>Login </h1>
      <Link to="/register">
        if you dont have account :<button>register</button>
      </Link>
    </div>
  )
}

export default Login
