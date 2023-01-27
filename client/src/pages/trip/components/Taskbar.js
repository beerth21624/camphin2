import React from 'react'
import '../css/trip.css'
import SearchIcon from '@mui/icons-material/Search'

const Taskbar = () => {
  return (
    <div className="task-card">
      <div>
        <div className="item">
          <p>CAMPGROUND</p>
          <select>
            <option value="volvo"></option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div>
        <div className="item">
          <p>BUDGET</p>
          <select>
            <option value=""></option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div>
        <div className="item">
          <p>DATE</p>
          <input type="date" />
        </div>
      </div>
      <div>
        <div className="item">
          <button className="button">
            <SearchIcon />
            SEARCH
          </button>
        </div>
      </div>
    </div>
  )
}

export default Taskbar
