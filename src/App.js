import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Signup from './Pages/Signup';
import DrawerAppBar from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import About from './Pages/About';
import './App.css';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
