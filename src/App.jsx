import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Main from "./components/Main";
import Sign from "./components/sign";
import LogIn from "./components/LogIn";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Sign />} /> {/* Add route for SignUp */}
        <Route path="/login" element={<LogIn />} /> {/* Add route for Login */}
      </Routes>
    </Router>
  );
}

export default App;
