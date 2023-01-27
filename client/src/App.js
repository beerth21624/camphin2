import React from 'react'
import Home from './pages/home/Home'
import Trip from './pages/trip/Trip'
import TripDetail from './pages/trip/TripDetail'
import CreateTrip from './pages/trip/CreateTrip'
import Navbar from './components/Navbar'
import './App.css'
import Headbar from './components/Headbar'
function App() {
  return (
    <div className="main">
      {/* <Navbar /> */}
      <Headbar />
      <CreateTrip />
    </div>
  )
}

export default App
