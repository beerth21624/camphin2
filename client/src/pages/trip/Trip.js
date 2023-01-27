import React from 'react'
import Taskbar from './components/Taskbar'
import CardTrip from './components/CardTrip'

const Trip = () => {
  return (
    <div className="p-5">
      <Taskbar />
      <div className="d-flex gap-4 flex-wrap" style={{ padding: '50px 10%' }}>
        <CardTrip />
        <CardTrip />
        <CardTrip />
        <CardTrip />
      </div>
    </div>
  )
}

export default Trip
