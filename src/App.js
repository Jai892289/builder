import React from 'react';
import Howitwork from './Components/Howitwork';
import Properties from './Components/Properties';
import Contact from './Components/Contact';
import About from "./Components/About";
import Header from './Components/Header';
import './index.css';


const App = () => {
  return (
    <div>
      <Header />

      <Howitwork />
        <About />
        <Properties />
        <Contact />
     
    </div>
  )
}

export default App

