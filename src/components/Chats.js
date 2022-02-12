import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase/Auth";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Chats = () => {
  // const history = useNavigate();
  // const { user } = useAuth();
  // const [loading, setLoading] = useState(true);

  // const handleLogout = async () => {
  //   await auth.signOut();
  //   //logging out
  //   history("/");
  // };
  // useEffect(() => {
  //   if (!user) {
  //     history("/");
  //     return;
  //   }
  //   const getFile = async (url) => {
  //     const response = await fetch(url);
  //     const data = await response.blob();
  //     return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  //   };

  //   axios
  //     .get("https://api.chatengine.io/users/me", {
  //       headers: {
  //         "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
  //         "user-name": user.email,
  //         "user-secret": user.uid,
  //       },
  //     })
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       let formdata = new FormData();
  //       formdata.append("email", user.email);
  //       formdata.append("username", user.email);
  //       formdata.append("secret", user.uid);

  //       getFile(user.photoURL).then((avatar) => {
  //         formdata.append("avatar", avatar, avatar.name);

  //         //creating user if not already there
  //         axios
  //           .post("https://api.chatengine.io/users/", formdata, {
  //             headers: {
  //               "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
  //             },
  //           })
  //           .then(() => {
  //             setLoading(false);
  //           })
  //           .catch((error) => console.log(error));
  //       });
  //     });
  // }, [user, history]);

  // if (!user || loading) {
  //   return "Loading...";
  // }

  return (
    <div className="chats-page">
      <Navbar />
      {/* <div onClick={handleLogout} className="logout-tab">
        Logout
      </div> */}
      <ChatEngine
        height="calc(100vh - 66px)"
        userName="test"
        userSecret="saket"
        projectID="95903dda-3921-4246-8a49-6769092c1b64"
      />
    </div>
  );
};

export default Chats;
