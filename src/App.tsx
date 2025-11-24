import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Resume from './components/Resume'

export default function App() {
  return (
    <>
    
      <Navbar />   {/* ALWAYS visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
    </>
  );
}
