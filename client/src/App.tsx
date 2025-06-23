// import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import { useState } from 'react'



function App() {
  const isOwnerPath = useLocation().pathname.includes('owner')

    const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>

      {!isOwnerPath && <Navbar onContactClick={handleOpen}/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </div>
      <Contact isOpen={showModal} onClose={handleClose}/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
