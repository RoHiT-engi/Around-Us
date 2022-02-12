import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Chats from "./components/Chats";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/quiz" element={<Quiz />} />
          {/* <Route path="/" component={Login} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
