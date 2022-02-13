import React from "react";
import Navbar from "../components/Navbar";
import { Widget } from "@typeform/embed-react";


const Quiz = () => {
  return (
    <div>
      <Navbar />
      
      <Widget id="nCAGlLw4" style={{ height: "100vh", width: "100vw" }} />
    </div>
  );
};

export default Quiz;
