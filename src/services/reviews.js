import Client from './api'

export const createReview = async (data) => {
  try {
    const res = await Client.post('/reviews', data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getReviewsByDoctor = async (doctorId) => {
  try {
    const reviews = await Client.get(`/reviews/${doctorId}`)
    return reviews.data
  } catch (error) {
    console.log(error)
  }
}
