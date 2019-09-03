import React, { Component } from './node_modules/react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from './node_modules/mdbreact';
import { BrowserRouter as Router } from './node_modules/react-router-dom';

import {Link} from "./node_modules/react-router-dom"
class NavBar extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
	[collapseId]: !this.state[collapseId],
	
  });
}

render() {
  return (
    <Router>
      <MDBContainer >
        <MDBNavbar 		color="white" 
					style={{
						marginTop: "0px",
						
						
					}}
					light>
          <MDBContainer>
  <Link to="/"><MDBNavbarBrand>
              DineNow
            </MDBNavbarBrand></Link>  
            {/* <MDBHamburgerToggler color="black" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} /> */}
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default NavBar;