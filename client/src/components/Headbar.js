import React from 'react'
// import '../App.css'

const Headbar = () => {
  return (
    <div className="headbar-container d-flex flex-column pt-5 gap-3">
      <div className="d-flex">
        <h1 className="m-auto logo">CAMPFIN</h1>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex gap-5">
          <p className="menu">HOME</p>
          <p className="menu">TRIP</p>
          <p className="menu">COMMUNITY</p>
          <p className="menu">ABOUT US</p>
          <p className="menu">SHOP</p>
        </div>
      </div>
    </div>
  )
}

export default Headbar
