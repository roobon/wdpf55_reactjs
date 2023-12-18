import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AdminHome from './AdminHome'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div id="wrapper">
      <Sidebar/>
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" class="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
                {/* <!-- Topbar --> */}
               <Navbar/>
                <Outlet/>   
            </div>
            {/* <!-- End of Main Content --> */}
           <Footer/>
        </div>
        {/* <!-- End of Content Wrapper --> */}
    </div>
  )
}
