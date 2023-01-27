import React from 'react'
import Header from './components/Header'
// import Taskbar from '../trip/components/Taskbar'
import './css/home.css'

import PlaceCard from './components/PlaceCard'

const Home = () => {
  return (
    <div className="home-container">
      {/* <Header /> */}
      <div className="p-5">
        {/* <Taskbar /> */}
        <div className="p-5 d-flex justify-content-start w-100 gap-5 flex-wrap">
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </div>
      </div>
    </div>
  )
}

export default Home
