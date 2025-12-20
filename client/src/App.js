import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
// Dodajemo 'Routes' u import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* SVE rute MORAJU biti unutar <Routes> elementa */}
      <Routes>
        {/* U v6 koristimo 'element' prop umjesto pisanja komponente unutar taga */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;