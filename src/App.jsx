import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import AboutUs from './components/AboutUs';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <NavBar />
    <Home/>
    <SocialLinks /> 
    <AboutUs/>
  
   </div>
  )
}

export default App;
