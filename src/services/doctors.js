import Client from './api'

export const getDoctors = async () => {
  try {
    const res = await Client.get('/doctors')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getDoctor = async (doctorId) => {
  try {
    const res = await Client.get(`/doctors/${doctorId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const addDoctor = async (doctor) => {
  try {
    const res = await Client.post('/doctors', doctor)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getDoctorSlot = async (doctorId, date) => {
  try {
    const res = await Client.post(`/doctors/${doctorId}/slot`, { date: date })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
