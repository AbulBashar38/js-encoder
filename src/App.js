
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className='font-montserrat'>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
