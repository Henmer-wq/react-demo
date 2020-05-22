
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          {/* <NavDropdown
            eventKey={2}
            title="Despegable prueba"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Ejemplo #1</MenuItem>
            <MenuItem eventKey={2.2}>Ejemplo #2</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Separar</MenuItem>
          </NavDropdown> */}
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
