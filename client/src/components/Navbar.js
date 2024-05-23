import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  function logout() {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <header className='p-3 mb-3 border-bottom'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a
            href='/'
            className='d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none'
          >
            <span>Leave Manager</span>
          </a>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <NavLink
                to='/'
                className='nav-link link-body-emphasis'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/apply'
                className='nav-link link-body-emphasis'
              >
                Apply
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/review'
                className='nav-link link-body-emphasis'
              >
                Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/users'
                className='nav-link link-body-emphasis'
              >
                Users
              </NavLink>
            </li>
          </ul>

          <div className='dropdown text-end'>
            <a
              href='#'
              className='d-block link-body-emphasis text-decoration-none dropdown-toggle'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              User
            </a>
            <ul className='dropdown-menu text-small'>
              <li>
                <button type='button' className='dropdown-item' onClick={logout}>
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
