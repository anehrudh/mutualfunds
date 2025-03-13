import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import InvestPage from './InvestPage';
import NavPage from './NavPage';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import MutualFundCalculator from './MutualFundCalculator'; // Import the MutualFundCalculator component
import Register from './Register';
import Login from './Login';
import Welcome from './Welcome';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/" className="tablinks">
            <button>Home</button>
          </Link>
          <Link to="/calculator" className="tablinks">
            <button>Mutual Fund Calculator</button>
          </Link>
          <Link to="/invest" className="tablinks">
            <button>Mutual Fund Investment</button>
          </Link>
          <Link to="/profile" className="tablinks">
            <button>Profile</button>
          </Link>
          <Link to="/register" className="tablinks">
            <button>Register</button>
          </Link>
          <Link to="/contact" className="tablinks">
            <button>Contact</button>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<MutualFundCalculator />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/nav" element={<NavPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
