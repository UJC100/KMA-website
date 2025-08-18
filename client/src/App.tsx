// import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import { useState } from 'react'
import JoinTeam from './pages/JoinTeam'
import MentorsPage from './pages/MentorsPage'
import Teams from './pages/Teams'
import NotFound from './component/NotFound'
import Events from './pages/Events'
import Reservation from './pages/Reservation'
import Dashboard from './pages/logged-in-user/dashboard'
import LoggedInUserLayout from './pages/logged-in-user/LoggedInUserLayout'



function App() {
  const noLayoutPaths = ['/join-team', '/payment', '/success', '/page-not-found'];
  const isOwnerPath = useLocation().pathname.startsWith('owner')
  const isMyAccount = location.pathname.startsWith("/my-account");
  const hideLayout = isOwnerPath || noLayoutPaths.includes(location.pathname);


    const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>

      {!hideLayout && !isMyAccount && <Navbar onContactClick={handleOpen}/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/join-team' element={<JoinTeam/>}/>
          <Route path='/mentor/:id' element={<MentorsPage/>}/>
          <Route path='/team' element={<Teams/>}/>

          <Route path='/events' element={<Events/>}/>
        
          <Route path="/reservation/:eventId" element={<Reservation />} />

          <Route path="*" element={<NotFound />} />


          <Route path='/my-account' element={<LoggedInUserLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>

      </div>
      <Contact isOpen={showModal} onClose={handleClose}/>
      <div>
        {!hideLayout &&  !isMyAccount && <Footer/>}
      </div>
    </div>
  )
}

export default App
