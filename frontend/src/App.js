// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import FooterComponent from './components/FooterComponent';
import LivestockComponent from './components/LivestockComponent';
import InventoryComponent from './components/InventoryComponent';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/employees" element={<LivestockComponent />} />
          <Route path="/projects" element={<InventoryComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;