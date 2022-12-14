// General Imports
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RealtorsPage from "./components/RealtorsPage/RealtorsPage";
import PropertiesPage from "./components/PropertiesPage/PropertiesPage";
import SophiaMorrisPage from "./components/SophiaMorrisPage/SophiaMorrisPage";
import DavidVernonPage from "./components/DavidVernonPage/DavidVernonPage";
import AdminPage from "./components/AdminPage/AdminPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/realtors" element={<RealtorsPage />} />
        <Route path="/realtors/sophiamorris" element={<SophiaMorrisPage />} />
        <Route path="/realtors/davidvernon" element={<DavidVernonPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
