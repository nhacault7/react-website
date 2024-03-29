// Page Imports
import Main from './Pages/Main';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import PiBag from './Pages/Portfolio/Projects/PiBag/PiBag';
// Component Imports
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import SiteCustomizer from './Components/SiteCustomizer/SiteCustomizer';
// Package Imports
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Style Imports
import './App.css';


function App() {
  const [accentColor, setAccentColor] = useState("#9200ee");
  const [accentCursor, setAccentCursor] = useState("default");

  const overlayUp = () => {
    const overlayElement = document.getElementById("page-transition-effect");
    overlayElement.className = "animate-up";
  }

  const overlayDown = () => {
    const overlayElement = document.getElementById("page-transition-effect");
    overlayElement.className = "animate-down";
  }

  return (
    <div id="cursor-container" style={{"--accentCursor": accentCursor}}>
      <LoadingScreen /> 
      <div id="page-transition-effect"></div>
      <SiteCustomizer SetAccentColor={setAccentColor} SetAccentCursor={setAccentCursor} />
      <Routes>
        <Route path="/" element={<Main OverlayUp={overlayUp} AccentColor={accentColor} />}>
          <Route path="blog" element={<Blog Title={"Blog Posts"} Description={"Showcasing some of my best work"} OverlayDown={overlayDown} AccentColor={accentColor} />} />
          <Route path="about" element={<About Title={"About Me"} Description={"Get to know me"} OverlayDown={overlayDown} AccentColor={accentColor} />} />
          <Route path="resume" element={<Resume Title={"Resume"} Description={"Check out my resume"} OverlayDown={overlayDown} AccentColor={accentColor} />} />
          <Route path="portfolio" element={<Portfolio Title={"Portfolio"} Description={"Showcasing some of my best work"} OverlayDown={overlayDown} AccentColor={accentColor} />}>
            <Route path="pibag" element={<PiBag OverlayUp={overlayUp} AccentColor={accentColor} />} />
          </Route>
          <Route path="contact" element={<Contact Title={"Get in Touch"} Description={"Feel free to contact me anytime"} OverlayDown={overlayDown} AccentColor={accentColor} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
