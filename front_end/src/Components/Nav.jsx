import React from 'react'
import { Link } from "react-router-dom";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Nav() {
  const navigate = useNavigate()
  const token = Cookies.get('token');
  const logout = () => {
    Cookies.remove('token')
    navigate('/signup')
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Expence App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link to={`/`} color='inherit' className="nav-link active">Home</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to={`/account`} color='inherit' className="nav-link active">Information</Link>
            </li> */}
          </ul>
          {token && (
              <span className="navbar-text m-2">
              <Link to={`/account`} color="inherit" className="nav-link active" >
                <AccountCircleIcon  />
              </Link>
              </span>
          )}  
          
          {!token ? (
            <span className="navbar-text " >
              <Link to={`/Signup`} color="inherit" className="nav-link active">
                SIGN UP
              </Link>
            </span>
          ) : (
            <span className="navbar-text">
              <ExitToAppIcon onClick={logout}></ExitToAppIcon>
            </span>
          )}

          {!token && (
            <span className="navbar-text">
              <Link to={`/login`} color="inherit" className="nav-link active m-2">
                LOG IN
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}
