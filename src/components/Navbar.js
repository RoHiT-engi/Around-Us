import * as React from "react";

import { Link, useNavigate } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { useState } from "react";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { auth,logout } from '../Firebase/Auth';
import { LinkContainer } from 'react-router-bootstrap'
import '../css/Navbar2.css'

//Elevation Scroll
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar2 = (props) => {
  const [loginicon, setloginicon] = useState('Login')
  const [search, setSearch] = useState('')

  const history = useNavigate()
  const check = async ()=>{
    try{if(auth.currentUser){
        await logout()
        setloginicon('login')
        history('/')
    }}
    catch(e){
        alert(e)
    }
}
  
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
                    {/* logo */}
                    <LinkContainer to="/">
                    <Navbar.Brand className="float-start" style={{marginLeft: "30px"}}>
                    Around Us
                    </Navbar.Brand></LinkContainer>
                    {auth.currentUser?
                <NavDropdown title={auth.currentUser.displayName || auth.currentUser.email} className="nav-links-custom">
                    
                    
                    <NavDropdown.Item><Link to='/dashboard'>Dashboard</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={check}>Logout</NavDropdown.Item>
                </NavDropdown>
                :<LinkContainer to="/Login" ><Nav.Link className="nav-links-custom"><nobr><i className="fa fa-user"></i>{" "}{loginicon}</nobr></Nav.Link></LinkContainer>}
                
                <Nav>
                    <LinkContainer to="/quiz"><Nav.Link className="nav-links-custom">Quiz</Nav.Link></LinkContainer>
                    <LinkContainer to="/chat"><Nav.Link className="nav-links-custom">Forum</Nav.Link></LinkContainer>
                 </Nav>
            </Navbar>
    </React.Fragment>
  );
};

export default Navbar2;
