import Client from './api'

export const getAllQuestion = async () => {
  try {
    const res = await Client.get('/questions')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const createQuestion = async (data) => {
  try {
    const res = await Client.post('/questions', data)
  } catch (error) {
    console.log(error)
  }
}
