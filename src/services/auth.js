import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/ath/register', data)
  } catch (error) {
    console.log(error)
  }
}

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    console.log(error)
  }
}

export const CheckSesion = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    console.log(error)
  }
}