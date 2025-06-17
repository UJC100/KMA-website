// import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer'
import AboutUs from './pages/AboutUs'



function App() {
  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div>

      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
