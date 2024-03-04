import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './Navigation/Log/Loginpage'
import Navbar from "./Navigation/Navbar"
import Navbar2 from "./Navigation/Navbar2"
import RegisterPage from './Navigation/Log/RegisterPage'
import Chart from './MindComp/Chart'
import MainComp from './MindComp/MainComp'
import Example from './Navigation/Example'
function RoutesPage() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/navbar2' element={<Navbar2 />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/dashboard' element={<MainComp />} />
          <Route path='/example' element={<Example />} />
        </Routes>
    </div>
  )
}

export default RoutesPage