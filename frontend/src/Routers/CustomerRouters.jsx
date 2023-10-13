import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const CustomerRouters = () => {
  return (
    <div>
        <div>

        </div>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
        </Routes>
        
    </div>
  )
}

export default CustomerRouters