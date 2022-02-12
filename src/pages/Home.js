import * as React from "react";
import { Widget } from '@typeform/embed-react';

import Navbar from "../components/Navbar";
import "../css/Home.css";

const pages = ["Home", "Login", "Sign Up"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Home = () => {
  return (
    <>
    <div div className="navMenu">
      {/* Navbar Starts */}
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="page">
        .
        <div className="title">
          <h1 id="a">
            <u>Do you feel that what you do is never good enough?</u>
          </h1>
          <br />
          <h2 id="a">Then you may be suffering from Imposter Syndrome </h2>
          <br />
          <h2 id="b">
            Imposter Syndrome affects your sense of self worth, happiness,
            progress and affects <br /> most of the people at some point in
            their lifetime. It may be at academic leevel or work level.
            <br />
            Accepting your imposter syndrome will allow you to accept that you
            deserve <br /> your success and allow you to reach greater heights
            in you life.
          </h2>
        </div>
      </div>
    </div>
    <Widget id="nCAGlLw4" style={{height: "100vh", width: "100vw"}} />
    </>
  );
};

export default Home;
