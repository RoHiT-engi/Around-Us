import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase/Auth";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Chats = () => {
  return (
    <div className="chats-page">
      <Navbar />
      <ChatEngine
        height="100vh"
        userName="test"
        userSecret="saket"
        projectID="95903dda-3921-4246-8a49-6769092c1b64"
      />
    </div>
  );
};

export default Chats;
