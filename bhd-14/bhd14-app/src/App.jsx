import React, { useState } from "react";  
import './App.css';
import TopNav from './components/TopNav.jsx';
import BackGround from './assets/background.jpg';
import bhd14Graphic from './assets/graphicbhd14.svg';
import SideNav from './components/SideNav.jsx';

function App() {


  return (
      <div className="App">
        <div className='mask'>  </div>
        <img src={BackGround} alt="Background" className="background" />
        <img src={bhd14Graphic} alt="bhd14Graphic" className="bhd14Graphic" />
        <SideNav></SideNav>
        <TopNav></TopNav>
      
      </div>
  )
}

export default App;
