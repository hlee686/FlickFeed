import React from 'react'
import {Routes, Route} from "react-router-dom"
import Layout from '../components/Layout'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      </Route>
    </Routes>

  )
}

export default Routers
