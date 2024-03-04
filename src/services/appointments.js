import Client from './api'

export const getUserInfo = async () => {
  try {
    const res = await Client.get(`/user`)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export const updateUserInfo = async (userId, data) => {
  try {
    const res = await Client.put(`/user/${userId}`, data)
  } catch (error) {
    console.log(error)
  }
}
export const getAppointments = async (userId) => {
  try {
    const res = await Client.get(`/user/${userId}/appointments`)
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
    const res = await Client.delete(`/user/appointment/${appontmrntId}`)
  } catch (error) {
    console.log(error)
  }
}
