import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <NavBar />
    <Home/>  
    <AboutUs/> 
    <Portfolio />
    <Experience />
    <SocialLinks /> 
    <Contact />
  

    
  
   </div>
  )
}

export default App;
