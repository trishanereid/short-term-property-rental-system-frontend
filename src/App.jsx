import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import UserProfilePage from "./pages/Profile";
import Login from "./pages/Login";
import Property from "./pages/Property";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/property" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property" element={<Property />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
