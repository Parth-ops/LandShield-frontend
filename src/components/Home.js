import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
const Home = () => {
  return (
    <div className="bg-slate-700 h-screen">
        <Navbar />
        <Dashboard />
    </div>
  )
}

export default Home