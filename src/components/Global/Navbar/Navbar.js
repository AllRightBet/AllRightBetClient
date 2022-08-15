import "./navbar.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = ({ setUser, user }) => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  const notLoggedIn = (
    <Nav
      className="nav__container"
      variant="pills"
      activeKey="/home"
      onSelect={handleSelect}
    >
      <NavDropdown
        className="nav_dropdown-container"
        title="Dropdown"
        id="nav-dropdown"
      >
        <NavDropdown.Item eventKey="4.1">Log In</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" onSelect={handleSelect}>
          Create Account
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  const loggedIn = (
    <Nav
      className="nav__container"
      variant="pills"
      activeKey="/home"
      onSelect={handleSelect}
    >
      <NavDropdown
        className="nav_dropdown-container"
        title="Dropdown"
        id="nav-dropdown"
      >
        <NavDropdown.Item eventKey="4.3">Add Funds</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Withdraw Funds</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">View Weekly Event</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Event History</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Top-Bets</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  return <>{user ? loggedIn : notLoggedIn}</>;
};

export default Navbar;
