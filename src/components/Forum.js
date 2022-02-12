import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";

import Chats from "../components/Chats";
import Login from "../components/ChatLogin";

function App() {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chat" component={Chats} />
            <Route path="/ChatLogin" component={Login} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
