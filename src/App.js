import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Quiz from "./pages/Quiz";

import Forgotpwd from "./pages/ForgotpwdScreen";
import Chats from "./components/ChatLogin";
import ForumChat from "./components/Chats";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/forgotpwd" element={<Forgotpwd />} />
          <Route path="/chat" element={<Chats/>} />
          <Route path="/ChatForum" element={<ForumChat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
