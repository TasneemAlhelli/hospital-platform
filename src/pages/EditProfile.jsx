import { updateUserInfo } from '../services/appointments'

const EditProfile = () => {
  const handleChange = (event) => {
    setRating({ ...rating, [event.target.id]: event.target.value })
  }
  const handleEdit = (event) => {
    event.preventDefault()
    // updateUserInfo()
  }

  return (
    <div>
      <h1>EditProfile</h1>
    </div>
  )
}

export default EditProfile
