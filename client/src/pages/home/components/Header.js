import React from 'react'
import '../css/header.css'
import Button from '@mui/material/Button'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="header-title">camphin</h1>
        <p className="header-subtitle">
          Find your next trip with camphin. We have the best trips for you.
        </p>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <Button variant="contained" size="medium">
            เลือกทริปเลย
          </Button>
          <Button variant="contained" size="medium">
            สร้างทริปของคุณ
          </Button>
          {/* <button className="btn header_btn">เลือกทริปเลย</button>
          <button className="btn header_btn">สร้างทริปของคุณ</button> */}
        </div>
      </div>
    </div>
  )
}

export default Header
