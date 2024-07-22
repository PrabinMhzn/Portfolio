import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';



function App() {
 

  return (
   <div>
    <NavBar />
    <Home/>  
    <About/> 
    <Portfolio />
    <Experience />
    <SocialLinks /> 
    <Contact />
  

    
  
   </div>
  )
}

export default App;
