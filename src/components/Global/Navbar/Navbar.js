import "./navbar.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
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
        <NavDropdown.Item eventKey="4.2">Create Account</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Navbar;
