import React, { useState } from "react";
import { Link } from "react-router-dom";

function LogRegi() {
  const Company = localStorage.getItem("company");
  const Name = localStorage.getItem("name");
  const Email = localStorage.getItem("email");

  const [show, setShow] = useState(localStorage.getItem("loggedIn"));
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };
  console.log(show, click);
  // const navi = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    setShow(!show);
  };

  const RenderProfile = () => {
    if (show) {
      return (
        <div className="duckduck">
          <Link
            className="nav-item dropdown-toggle under"
            to="/dashboard"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={handleClick}
          >
            <i className="fas fa-user-circle"></i>
            <span className="name">{Company}</span>
          </Link>
          <ul className="dropdown-menu">
            <div className="loff">
              <div>
                <i className="fas fa-user"></i>
              </div>
              <div>
                <li className="dropdown-item">{Name}</li>
                <li className="dropdown-item">{Email}</li>
              </div>
            </div>
            <hr className="dropdown-divider" />
            <li>
              <Link
                to="/login"
                className="dropdown-item"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="dropdown">
          <Link
            className="btn btn-secondary dropdown-toggle"
            to="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user-circle"></i>
          </Link>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/register">
                Signup
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      <RenderProfile />
    </div>
  );
}

export default LogRegi;
