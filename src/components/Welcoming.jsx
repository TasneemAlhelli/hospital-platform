import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Welcoming = () => {
  let [to, setTo] = useState('book-an-appointment')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setTo('/login')
    }
  }, [])
  return (
    <div>
      <section className="welContainer">
        <div className="welBtn">
          <h2>Welcome to G.A.H</h2>
          {user}
          <Link to={to}>
            <button className="welAppBtn">
              <span>Book an Appointment</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Welcoming
