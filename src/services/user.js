import Client from './api'

export const getUserInfo = async () => {
  try {
    const res = await Client.get(`/user`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export const updateUserInfo = async (data) => {
  try {
    const res = await Client.put(`/user`, data)
  } catch (error) {
    console.log(error)
  }
}
