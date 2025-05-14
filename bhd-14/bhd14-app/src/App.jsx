import React, { useState } from "react";  
import './App.css';
import TopNav from './components/TopNav.jsx';
import BackGround from './assets/background.jpg';
import bhd14Logo from './assets/graphicbhd14.svg';

function App() {


  return (
      <div className="App">
        <div className='mask'>  </div>
        <img src={BackGround} alt="Background" className="background" />
        <img src={bhd14Logo} alt="bhd14Logo" className="bhd14Logo" />
        <TopNav></TopNav>
  
      </div>
  )
}

export default App;
