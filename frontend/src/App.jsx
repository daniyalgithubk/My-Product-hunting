import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import { Route, Routes} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout.jsx'
import Home from './pages/Home Pages/Home.jsx'
import About from './pages/About Pages/About.jsx'
import Login from './pages/Login Pages/Login.jsx'
import LandingPage from './components/LandingPage.jsx';


function App() {
  return (
    <>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
