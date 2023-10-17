import React from 'react'
import { Route, Routes} from 'react-router-dom'
import MainLayout from '../Admin/components/MainLayout'
import Dashboard from '../Admin/pages/Dashboard'
import Enquiries from '../Admin/pages/Enquiries'
import Bloglist from '../Admin/pages/Bloglist'
import Staff from '../Admin/pages/Staff'
import Customers from '../Admin/pages/Customers'
import Addblog from '../Admin/pages/Addblog'


const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='enquiries' element={<Enquiries/>}/>
          <Route path='bloglist' element={<Bloglist/>}/>
          <Route path='staff' element={<Staff/>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='blog' element={<Addblog/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AdminRouters
