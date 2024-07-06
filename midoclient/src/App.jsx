import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ContactUs from './pages/ContactUs'

function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<ContactUs />} />
    </Routes>
    </>
  )
}

export default App
