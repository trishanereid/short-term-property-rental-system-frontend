import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import UserProfilePage from "./pages/Profile";
import Login from "./pages/Login";
import Property from "./pages/Property";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { ThemeProvider } from "./components/theme-provider";

function AppContent() {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/property", "/signup"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property" element={<Property />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
