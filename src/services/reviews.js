import Client from './api'

export const createReview = async (data) => {
  try {
    const res = await Client.post('/reviews', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
