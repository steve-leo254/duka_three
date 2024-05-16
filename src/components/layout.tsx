import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="layout">
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark ${
          isCollapsed ? "collapsed" : ""
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sales">
                    Sales
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container mt-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
