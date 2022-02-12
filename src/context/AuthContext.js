import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Auth";
import React from "react";

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user); //setting user from firebase
      setLoading(false);
      if (user) {
        history("/chat");
      } //router dom to push to chat page
    });
  }, [user, history]);
  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
