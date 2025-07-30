import React, { useState } from 'react'

import LoadParent from './Components/Loading/LoadParent'
import Home from './Components/Pages/Home'
import MenuPage from './assets/MenuPage'
import NavBar from './Components/NavBar/NavBar'
import AboutPage from './Components/Pages/AboutPage'
import ServicePage from './Components/Pages/ServicePage'
import WorkPage from './Components/Pages/WorkPage'
import WorkFlow from './Components/Pages/WorkFlow'
import Contact from './Components/Pages/Contact'
import Career from './Components/Pages/Career'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  const [menu, setMenu] = useState(false)
  return (
    <>

      <div className='w-full overflow-hidden bg-zinc-50'>
        <MenuPage menu={menu} setMenu={setMenu} />
        
         
        <NavBar menu={menu} setMenu={setMenu} />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/services" element={<ServicePage/>} />
            <Route path="/work" element={<WorkPage/>} />
            <Route path="/work-flow" element={<WorkFlow/>} />
            <Route path="/career" element={<Career/>} />
            <Route path="/contact" element={<Contact/>} />


        </Routes>
        
      </div>
    </>
  )

}
