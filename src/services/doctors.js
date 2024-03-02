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
