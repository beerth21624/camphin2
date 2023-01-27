import React from 'react'
import '../css/home.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DescriptionIcon from '@mui/icons-material/Description'
import StarIcon from '@mui/icons-material/Star'

const PlaceCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1629185752152-fe65698ddee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`,
      }}
      className="card-container"
    >
      <div className="card-content">
        <div className="rate-container">
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
          <StarIcon className="star" />
        </div>
        <h1 className="card-title">Camp ku start up</h1>
        <div className="d-flex gap-2">
          <LocationOnIcon />
          <p>กาญจนบุรี</p>
        </div>
        <div className="d-flex gap-2">
          <DescriptionIcon />
          <p>
            เช็คอิน: หลัง 13.00 <br />
            เช็คเอ้าท์: ก่อน 12.00 เมื่อถึงที่พัก: เช็คอินที่เคาน์เตอร์
          </p>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard
