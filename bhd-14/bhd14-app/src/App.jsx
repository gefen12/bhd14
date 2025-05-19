import React, { useState, useEffect } from "react";  
import './App.css';
import TopNav from './components/TopNav.jsx';
import BackGround from './assets/background.jpg';
import BackGround2 from './assets/background2.jpg';
import BackGround3 from './assets/background3.jpg';
import BackGround4 from './assets/background4.jpg';
import bhd14Graphic from './assets/graphicbhd14.svg';

import SideNav from './components/SideNav.jsx';
import OpenScreen from "./components/OpenScreen.jsx";
import BachScreen from "./components/BachScreen.jsx";
import GdodHaScreen from "./components/GdodHaScreen.jsx";
import MiktzotScreen from "./components/MiktzotScreen.jsx";
import MifkadaScreen from "./components/MifkadaScreen.jsx";
import BottomNav from "./components/BottomNav.jsx";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [page, setPage] = useState("home"); 
  const [currentBackground, setCurrentBackground] = useState(0); 
  const backgrounds = [BackGround, BackGround2, BackGround3, BackGround4];
  useEffect(() => {
    // Set a timeout to show content after the animation duration (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500); // Adjust this duration to match your animation time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000); 

    return () => clearInterval(interval); // Cleanup the interval
  }, [backgrounds.length]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
      <div className="App">
        <div className='mask'>  </div>
        <img src={backgrounds[currentBackground]} alt="Background" className="background" />
        <img src={bhd14Graphic} alt="bhd14Graphic" className="bhd14Graphic" />

        {showContent && (
        <>
          <SideNav />
          <TopNav onNavigate={handlePageChange} activePage={page} />
    
          <h1 className="sentence">תמיד בחזית, הנדסה צבאית</h1>
          {page === "home" && <OpenScreen />} 
          {page === "bach" && <BachScreen />}
          {page === "gdodha" && <GdodHaScreen />}
          {page === "miktzot" && <MiktzotScreen />}
          {page === "mifkada" && <MifkadaScreen />}

          <BottomNav />
        </>
      )}
      
      </div>
  )
}

export default App;
