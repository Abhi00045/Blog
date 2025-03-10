import React from 'react'
import Navbar from '../../component/Navbar'
import { Outlet } from 'react-router-dom'

function Mainlayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Mainlayout