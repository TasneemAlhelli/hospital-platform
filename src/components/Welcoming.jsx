import { Link } from 'react-router-dom'

const Welcoming = () => {
  return (
    <div>
      <section className="welContainer">
        <div className="welBtn">
          <h2>Welcome to G.A.H</h2>
          <Link to="/book-an-appointment">
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
