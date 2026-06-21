
import './App.css'


import { Route, Routes} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout.jsx'
import Home from './pages/Home Pages/Home.jsx'
import About from './pages/About Pages/About.jsx'
import Login from './pages/Login Pages/Login.jsx'



function App() {
  return (
    <>
      <Routes className="md:h-screen md:w-full">
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
