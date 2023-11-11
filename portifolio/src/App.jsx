
import './App.css'
import Home from './Pages/Home'
import SobreMim from './Pages/SobreMim'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobremim' element={<SobreMim />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
