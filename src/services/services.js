import Client from './api'

export const getServices = async () => {
  try {
    const res = await Client.get('/services')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getInterestedServices = async () => {
  try {
    const res = await Client.get('/services/filter')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getService = async (serviceId) => {
  try {
    const res = await Client.get(`/services/${serviceId}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
