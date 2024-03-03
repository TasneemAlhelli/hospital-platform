import Client from './api'

export const getUserInfo = async (userId) => {
  try {
    const res = await Client.get(`/user/${userId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export const updateUserInfo = async () => {
  try {
    const res = await Client.put(`/user/${userId}`)
  } catch (error) {
    console.log(error)
  }
}
export const getAppointments = async () => {
  try {
    const res = await Client.get(`/user/appointments`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export const getAppointmentsStatus = async (status) => {
  try {
    const res = await Client.get(`/user/appointments/${status}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export const addAppointment = async (data) => {
  try {
    const res = await Client.post('/user/appointment', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const deleteAppointment = async () => {
  try {
    const res = await Client.delete('/user/id/appointment/id')
  } catch (error) {
    console.log(error)
  }
}
