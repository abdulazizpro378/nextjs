import Link from "next/link";
// import './header.css'
import './header.css'
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <header classNameName="header">
      <div className="container">
        {/* <Link href="/about">About</Link> */}
        {/* <Link href="/contact">Contact Us</Link>
        <Link href="/cart">Cart</Link> */}

        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="./about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="./cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
