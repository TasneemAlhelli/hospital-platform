import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Welcoming = ({ user }) => {
  return (
    <div>
      <section className="welContainer">
        <div className="welBtn">
          <h2>Welcome to G.A.H</h2>

          <Link to={user.role ? 'book-an-appointment' : '/login'}>
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
