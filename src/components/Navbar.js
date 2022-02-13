import * as React from "react";

import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { auth } from "../Firebase/Auth";
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

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [login, setLogin] = React.useState("Login");
  const [name, setName] = React.useState("Name");

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //Name here dynamically changes based on user login**************
  const HandleName = () => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName);
    } else {
      setName("Profile");
    }
  };

  const HandleLogin = () => {
    if (auth.currentUser != null) {
      setLogin("Logout");
    } else {
      setLogin("login");
    }
    // handleCloseNavMenu();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        {/* Navbar Starts */}
        <AppBar
          sx={{
            backgroundColor: "#000",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    mr: 2,
                    display: {
                      xs: "none",
                      md: "flex",
                      fontWeight: "bold",
                      color: "gold",
                      border: 2,
                      borderColor: "yellow",
                      boxShadow: 2,
                      "&:hover": {
                        color: "yellow",
                      },
                    },
                  }}
                >
                  Around Us
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={HandleLogin}>
                    <Typography textAlign="center">{login}</Typography>
                  </MenuItem>{" "}
                  <Link
                    to="/quiz"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Quiz</Typography>
                    </MenuItem>
                  </Link>
                  <Link
                    to="/chat"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Forums</Typography>
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={HandleName}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>{" "}
                </Menu>
              </Box>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  Around Us
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link
                  to="/chat"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Forums
                  </Button>
                </Link>
                <Link
                  to="/quiz"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Quiz
                  </Button>
                </Link>
                <Button
                  onClick={HandleLogin}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  {login}
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <MenuItem
                  onClick={HandleName}
                  sx={{
                    color: "white",
                    float: "right",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {name}
                </MenuItem>
                <MenuItem
                  onClick={handleCloseUserMenu}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      {/* Navbar Ends here */}
    </React.Fragment>
  );
};

export default Navbar;
