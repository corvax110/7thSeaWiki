import logo from './logo.svg';
import './App.css';
import React from "react";
import "./App.css";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import zeldaclone from "./Pages/zeldaclone"
var Home = zeldaclone;




function App() {
  return (
    <div id="app-container" data-testid="app">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="*" element={<Home />/*This must always be last*/} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
