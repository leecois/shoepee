import React from 'react'
import { Route, Routes} from 'react-router-dom'
import MainLayout from '../Admin/components/MainLayout'

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}></Route>
      </Routes>
    </div>
  )
}

export default AdminRouters
