import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Contacto from './pages/Contacto'
import Home from './pages/Home'

function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contacto/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
