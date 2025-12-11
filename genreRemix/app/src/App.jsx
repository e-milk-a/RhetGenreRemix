import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplitScreen from "./components/SplitScreen"
import NavBar from './components/NavBar'
import InfoSection from './components/InfoSection'
import About from './components/About';
import HomeBan from './components/HomeBan';
import Split from './components/Split';
import Brainrot from './components/Brainrot';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" element = {
          <>
            <HomeBan />
            <Split />
            <InfoSection />
          </>
          } 
          />
        <Route path = "/about" element = {<About />} />
        <Route path="/brainrot" element={<Brainrot />} />
      </Routes>
    </Router>
  )
}


export default App
