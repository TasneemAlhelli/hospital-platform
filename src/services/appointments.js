import Client from './api'

export const getUserInfo = async (userId) => {
  try {
    const res = await Client.get(`/user/${userId}`)
    return res.data
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

export const addAppointment = async () => {
  try {
    const res = await Client.post('/user/id/appointment')
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
