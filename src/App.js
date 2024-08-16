import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
// import Reporting from './components/Pages/Reporting';
// import Interactivemap from './components/Pages/Interactivemap';
// import Predictive from './components/Pages/Predictive';
// import Adfeatue from './components/Pages/Adfeatue';
import Dashboard from './components/Pages/Dashboard';
// import Login from './components/Pages/Login';
// import Display from './components/Pages/Display';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/map" element={<Interactivemap />} /> */}
          {/* <Route path="/reporting" element={<Reporting />} /> */}
          {/* <Route path="/predictive" element={<Predictive />} /> */}
          {/* <Route path="/adfeature" element={<Adfeatue />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/display" element={<Display />} /> Unique path for Display */}
          {/* <Route path="/login" element={<Login />} /> Unique path for Login */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
