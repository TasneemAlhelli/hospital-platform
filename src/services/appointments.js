import Client from './api'

export const getAppointments = async () => {
  try {
    const res = await Client.get(`/user/id/appointments`)
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
