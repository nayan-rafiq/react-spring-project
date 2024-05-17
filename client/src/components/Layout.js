import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className='Layout'>
      <Navbar></Navbar>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
