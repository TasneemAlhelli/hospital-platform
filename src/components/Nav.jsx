import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let options
  if (user) {
    options = (
      <div className="pstn">
        <Link
          to="/services"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <li>Services</li>
        </Link>
        <Link
          to="/doctors"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <li>Doctors</li>
        </Link>

        <Link
          to="/profile"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <li>Profile</li>
        </Link>

        <Link
          onClick={handleLogOut}
          to="/"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <li>Sign Out</li>
        </Link>
      </div>
    )
  } else {
    options = (
      <div className="pstn">
        <Link
          to="/services"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <li>Services</li>
        </Link>
        <Link
          to="/doctors"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <li>Doctors</li>
        </Link>

        <Link
          to="/login"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <li>Login</li>
        </Link>
      </div>
    )
  }
  return (
    <header>
      <div>
        <ul>
          <Link to="/">
            <div className="logoPosition">
              <img className="logo" src="/image/Logo-10.png" />
            </div>
          </Link>

          {options}
        </ul>
      </div>
    </header>
  )
}

export default Nav
