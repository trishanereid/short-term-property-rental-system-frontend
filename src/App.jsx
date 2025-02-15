import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
