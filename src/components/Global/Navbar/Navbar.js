import "./navbar.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const Navbar = ({ setUser, user }) => {
  const handleSelect = null
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

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

        <NavDropdown.Item> <LinkContainer to="/" >
          <Nav.Link  >Log In</Nav.Link>
        </LinkContainer></NavDropdown.Item>


        <NavDropdown.Item> <LinkContainer to="/signUp" >
          <Nav.Link  >Sign Up</Nav.Link>
        </LinkContainer></NavDropdown.Item>


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

        <NavDropdown.Item> <LinkContainer to="/" >
          <Nav.Link  >Home</Nav.Link>
        </LinkContainer></NavDropdown.Item>

        <NavDropdown.Item> <LinkContainer to="/withdraw-funds" >
          <Nav.Link  >Withdraw Funds</Nav.Link>
        </LinkContainer></NavDropdown.Item>

        <NavDropdown.Item> <LinkContainer to="/event" >
          <Nav.Link  >View Weekly Event</Nav.Link>
        </LinkContainer></NavDropdown.Item>

        <NavDropdown.Item> <LinkContainer to="/history" >
          <Nav.Link  >Event History</Nav.Link>
        </LinkContainer></NavDropdown.Item>

        <NavDropdown.Item> <LinkContainer to="/top-bets" >
          <Nav.Link  >Top-Bets</Nav.Link>
        </LinkContainer></NavDropdown.Item>

        <NavDropdown.Item> <LinkContainer to="/settings" >
          <Nav.Link  >Settings</Nav.Link>
        </LinkContainer></NavDropdown.Item>


        <NavDropdown.Divider />

        {
          user != null ?
            user['admin_role'] ?
              <> <NavDropdown.Item> <LinkContainer to="/admin" >
                <Nav.Link  >Admin</Nav.Link>
              </LinkContainer></NavDropdown.Item>  </>
              : null
            : null
        }

        <NavDropdown.Item> <LinkContainer to="/" >
          <Nav.Link  >Log Out</Nav.Link>
        </LinkContainer></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  return <>{user ? loggedIn : notLoggedIn}</>;
};

export default Navbar;
