import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './new.png';

const Navbar = () => {
  // Function to handle click on Predictive Maintenance link
  const handlePredictiveClick = () => {
    // Redirect the user to the HTML page for Predictive Maintenance
    window.location.href = '/html/espapp.html';
  };
  const handleAdfeatureClick = () => {
    // Redirect the user to the HTML page for Predictive Maintenance
    window.location.href = '/html/grahp.html';
  };
  const handleReportingClick = () => {
    // Redirect the user to the HTML page for Predictive Maintenance
    window.location.href = '/html/report.html';
  };
  const handledisplayClick = () => {
    // Redirect the user to the HTML page for Predictive Maintenance
    window.location.href = '/html/level.html';
  };
  // const handleloginClick = () => {
  //   // Redirect the user to the HTML page for Predictive Maintenance
  //   window.location.href = '/html/login.html';
  // };
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      <ul>
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/map" className="map">
          <li>Interactive Map</li>
        </Link>
        <Link onClick={handleAdfeatureClick} className="adfeature">
          <li>Advanced Feature</li>
        </Link>
        <li onClick={handlePredictiveClick} className="predictive">
          Predictive Maintenance
        </li>
        <Link onClick={handleReportingClick} className="reporting">
          <li>Reporting</li>
        </Link>
        
        <Link to="/dashboard" className="dashboard">
          <li>Dashboard</li>
        </Link>
        <Link onClick={handledisplayClick} className="display">
          <li>Display</li>
        </Link>
        {/* <Link to="/login" className="login">
          <li></li>
        </Link> */}
        {/* <Link onClick={handleloginClick} className="login">
          <li>Login</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Navbar;
