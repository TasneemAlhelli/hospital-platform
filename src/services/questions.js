import Client from './api'

export const getAllQuestion = async (req, res) => {
  try {
    const res = await Client.get('/questions')
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const createQuestion = async (req, res) => {
  try {
    const res = await Client.post('/questions')
  } catch (error) {
    console.log(error)
  }
}
