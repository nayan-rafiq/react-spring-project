import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Login from "./components/Login"
import LeaveApplication from "./components/LeaveApplication"
import Review from './components/Review'
import UserList from './components/UserList'
import AddUser from './components/AddUser'
import LeaveAllocations from './components/LeaveAllocations'
import LeaveApplications from './components/LeaveApplications'

const root = ReactDOM.createRoot(document.getElementById("root"))
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='apply' element={<LeaveApplication />} />
          <Route path='review' element={<Review />} />
          <Route path='users' element={<UserList />} />
          <Route path='users/add' element={<AddUser />} />
          <Route path='users/:id/leaves/alloted' element={<LeaveAllocations />} />
          <Route path='users/:id/leaves/applied' element={<LeaveApplications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(<App />)
