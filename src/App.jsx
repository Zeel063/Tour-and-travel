import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Menu from "./pages/Menu.jsx"
import Contact from "./pages/trip.jsx"
import Navbar from "./Navbar.jsx"




function App() {
  
  return (
    
     <div className='app'>
      <Router>
        <Navbar/>
       
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<h1> PAGE NOT FOUND </h1>}/>
           
          </Routes>
      </Router>
     
    </div>
    
    );

  }
    
  


export default App;
