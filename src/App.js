import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import NoteState from './context/NoteState';
import Alert from './Component/Alert';

function App() {
  return (
    <NoteState>
    <Router>
      <Navbar />
      <Alert/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
