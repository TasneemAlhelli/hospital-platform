import { Link } from "react-router-dom"

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
            <Link
              to="/services"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li>Services</li>
            </Link>
            <Link
              to="/doctors"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li>Doctors</li>
            </Link>

            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li>Login</li>
            </Link>

            <Link
              to="/profile"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li>profile</li>
            </Link>
          </div>
        </ul>
      </div>
    </header>
  )
}

export default Home
