import React from 'react'
import Layout from '../../components/Layout'
import './css/trip.css'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const CreateTrip = () => {
  return (
    <Layout>
      <div className="create-trip ">
        <h1 className="title">Create trip</h1>
        <label for="image-trip" className="upload-image">
          <div className="upload-image-content">
            <p>Upload Image</p>
          </div>
        </label>
        <input className="image-input" id="image-trip" type="file" />
        <div className="p-5">
          <div className="input-box">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateTrip
