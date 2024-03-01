import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <header>
      <div>
        <ul>
          <Link to="/">
            <div className="logoPosition">
              <img className="logo" src="/image/red-cross.png" />
            </div>
          </Link>

          <div className="pstn">
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/doctors">
              <li>Doctors</li>
            </Link>

            <Link to="/login">
              <li>Login</li>
            </Link>

            <Link to="/profile">
              <li>profile</li>
            </Link>
          </div>
        </ul>
      </div>
    </header>
  )
}

export default Home
