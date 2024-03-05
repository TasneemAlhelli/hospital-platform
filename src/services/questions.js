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
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const answerToQuestion = async (data, questionId) => {
  try {
    const res = await Client.put(`/questions/${questionId}`, data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
