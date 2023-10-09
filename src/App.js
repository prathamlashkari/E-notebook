import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import NoteState from './context/NoteState';
import Alert from './Component/Alert';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {
  const [alert, setalert] = useState(null)
  const showalert = (message, types) => {
    setalert({
      msg: message,
      type: types
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <NoteState>
    <Router>
      <Navbar />
      <Alert  alert={alert}/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home showalert={showalert} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login showalert={showalert}/>} />
        <Route exact path="/signup" element={<Signup showalert={showalert}/>} />
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
