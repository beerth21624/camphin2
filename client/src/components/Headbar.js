import React from 'react'
// import '../App.css'
import { useNavigate } from 'react-router-dom'

const Headbar = () => {
  const navigate = useNavigate()

  function changePage(page) {
    navigate(page)
  }
  return (
    <div className="headbar-container d-flex flex-column pt-5 gap-3">
      <div className="d-flex">
        <h1 className="m-auto logo">CAMPFIN</h1>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex gap-5">
          <p onClick={() => changePage('/')} className="menu">
            HOME
          </p>
          <p onClick={() => changePage('/trip')} className="menu">
            TRIP
          </p>
          <p className="menu">COMMUNITY</p>
          <p className="menu">ABOUT US</p>
          <p className="menu">SHOP</p>
        </div>
      </div>
    </div>
  )
}

export default Headbar
