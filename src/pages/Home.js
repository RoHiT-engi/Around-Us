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
    
    <div >
      <div div className="navMenu">
      {/* Navbar Starts */}
      <Navbar />
      <div className="page">
        <div className="title">
          <h1 id="a"><u>Do you feel that what you do is never good enough?</u></h1>
          <br />
          <h2 id="a">Then you may be suffering from Imposter Syndrome </h2>
          <br />
          <h2 id='b'>Imposter Syndrome affects your sense of self worth, happiness, progress and affects <br /> most of the people at some point in their lifetime. It may be at academic leevel or work level.<br />Accepting your imposter syndrome will allow you to accept that you deserve <br /> your success and allow you to reach greater heights in you life.
            <br />
            <br />
          </h2>
          <hr />
        </div>
        </div>
    </div><div>

          <div class="container">
          <div class="row">
          <div class="col-sm">
          <div class="blog_post">
          <div class="container_copy">
            <h1>Name</h1>
            <br/>
            <h3>12 January 2019</h3>
            <br/>
            <h2>CSS Positioning</h2>
            <h4>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</h4>
            </div>
            </div>
            </div>
            <div class="col-sm">
            <div class="blog_post">
          <div class="container_copy">
            <h1>Name</h1>
            <br/>
            <h3>12 January 2019</h3>
            <br/>
            <h2>CSS Positioning</h2>
            <h4>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</h4>
            </div>
            </div>
            </div>
            <div class="col-sm">
            <div class="blog_post">
          <div class="container_copy">
            <h1>Name</h1>
            <br/>
            <h3>12 January 2019</h3>
            <br/>
            <h2>CSS Positioning</h2>
            <h4>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</h4>
            </div>
            </div>
            </div>
            </div>
      </div>
          </div>
          <a class="btn_primary" href='#'>Read More</a>
        </div>
      

    
       
        
        
        );
        };

        export default Home;
        