import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

export default class CHMSNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFullBrandShown: false
    };
    this.showFullBrand = this.showFullBrand.bind(this);
    this.hideFullBrand = this.hideFullBrand.bind(this);

  }

  showFullBrand() {
    this.setState({ isFullBrandShown: true });
  }

  hideFullBrand() {
    this.setState({ isFullBrandShown: false });
  }

  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/" onMouseOver={this.showFullBrand}
               onMouseOut={this.hideFullBrand}> {this.state.isFullBrandShown ? "Community Health Monitoring System" : "CHMS"}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#/">Home Page</NavItem>
            <NavItem href="#/rankingList">Sport Analysis</NavItem>
            <NavItem href="#/deepMining">Food Analysis</NavItem>
            <NavItem href="#/sentimentAnalysis">Sentimental Analysis</NavItem>
            <NavItem href="#/contactUs">Contact Us</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown title="Tommy" id="basic-nav-dropdown">
              <MenuItem href="#/myProfile">My Profile</MenuItem>
              <MenuItem href="#/messageBoard">Message Board</MenuItem>
              <MenuItem divider />
              <MenuItem >Log Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

//TODO Handle login
