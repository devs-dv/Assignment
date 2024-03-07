import React from 'react'; // Import React from 'react'
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"; // Correct import statement for the Footer component

function App() {
  return (
    <>
      <Navbar />
      <Footer /> {/* Render the Footer component */}
    </>
  );
}

export default App;
