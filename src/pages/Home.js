import AppBar from "@mui/material/AppBar";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "../css/Home.css";

const pages = ["Home", "Login", "Sign Up"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Home = () => {
  return (
    <div div className="navMenu">
      {/* Navbar Starts */}
      <Navbar />

      <div className="page">
        <p>Home Page. COMING SOON</p>
      </div>
    </div>
  );
};

export default Home;
