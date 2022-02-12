import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";

import Chats from "../components/Chats";
import Login from "../components/Login";

function Forum() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats />} />
            {/* <Route path="/" element={<Login/>} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default Forum;
