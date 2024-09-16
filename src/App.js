import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Login from './components/pages/login';
import Landing from './components/pages/landing';
import Template from './components/pages/template';
import AnimatedCursor from "react-animated-cursor";
import Dashboard from './components/pages/dashboard';
import Createtemplate from './components/pages/createTemplate';
import Faq from './components/preferences/faq';


function App() {
  const [showCursor, setShowCursor] = useState(true);
  const [counter, setCounter] = useState(0);



  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/template" element={<Template />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/createTemplate" element={<Createtemplate />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
