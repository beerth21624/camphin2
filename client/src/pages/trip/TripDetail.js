import React from 'react'
import './css/trip.css'

import CheckBoxIcon from '@mui/icons-material/CheckBox'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonIcon from '@mui/icons-material/Person'

const TripDetail = () => {
  const include = [
    'Specialized bilingual guide',
    'All entrance fees',
    'All transportation',
    'All meals',
    'All accommodation',
    'All activities',
  ]
  const ITINERARY = [
    'DAY 1 Departure at the airport and arrival at the hotel',
    'DAY 2 Visit the main museums and lunch included',
    'DAY 3 Excursion in the natural oasis and picnic',
    'DAY 4 Transfer to the airport and return to the agency',
  ]

  return (
    <div className="w-100 d-flex justify-content-center p-3">
      <div className="trip-detail-container">
        <div className="d-flex flex-column mx-4 mt-2 p-5">
          <div className="d-flex flex-column ">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column ">
                <span className="title ms-3">ทริปพักผ่อน ku startup</span>
                <div className="header">
                  <div className="d-flex align-items-center gap-2">
                    <LocationOnIcon />
                    <span>กาญจนบุรี</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <CalendarMonthIcon />
                    <span> 11/12/2021 - 16/12/2021</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <AccessTimeIcon />
                    <span>5 วัน 4 คืน</span>
                  </div>
                </div>
              </div>
              <div className="title-price-container ">
                <span className="title-price">750฿</span>
                <span className="title-price-detail">/ต่อคน</span>
              </div>
            </div>
            <div>
              <img
                className="image"
                src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="d-flex flex-column ">
              <span className="topic">OVERVIEW :</span>
              <span className="desc">
                Malesuada incidunt excepturi proident quo eros? Id interdum
                praesent magnis, eius cumque? Integer aptent officiis recusandae
                habitasse iure, quisque culpa! Nemo et? Vel excepteur
                pellentesque morbi ducimus porro commodo sollicitudin, quidem,
                cupiditate ligula doloribus recusandae non, hac, ullam per,
                natus parturient sollicitudin! Facilis vestibulum accumsan
                quisquam excepturi explicabo. Quam aut, luctus hendrerit,
                laborum, dolor, consectetur scelerisque quisque feugiat sequi,
                ea ipsa consequat atque consectetur. Litora aute error
                eos.Placerat habitasse nascetur sit voluptatem ea sint
                facilisis! Esse sed lacus! Sociosqu ullamcorper venenatis in.
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-center p-2 my-5">
              <div className="include">
                <span className="topic">INCLUDE & EXCLUDE :</span>
                <div className="row mt-2">
                  {include.map((item) => {
                    return (
                      <span className="col-6 include-item">
                        <CheckBoxIcon />
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>

            <div>
              <span className="topic">ITINERARY :</span>
              <div className="row mt-2">
                {ITINERARY.map((item) => {
                  return (
                    <div className="col-12 itinerary-item">
                      <div className="d-flex gap-2 align-items-center">
                        <ContentPasteIcon />
                        <span>{item}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ///section2 */}
        <div className="d-flex flex-column gap-4  pe-2 section-2">
          <div className="create-box">
            <span>ผู้สร้างทริป</span>
            <div className="d-flex align-items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <span>sarawut inpol</span>
            </div>
          </div>
          <div className="ad">
            <span className="ad-item">พื้นที่โฆษณา</span>
          </div>
          <div className="join">
            <span className="join-title">เข้าร่วมทริปแล้ว</span>
            <span className="count">
              <span>2/30</span>
            </span>
            <div className="d-flex flex-wrap w-100 gap-3">
              <img
                className="image-person"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
              <img
                className="image-person"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="mt-3">
              <button className="join-btn">เข้าร่วมเลย</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripDetail
