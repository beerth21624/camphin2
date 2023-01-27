import React from 'react'
import '../App.css'

const Layout = ({ children }) => {
  return (
    <div className="w-100 d-flex justify-content-center p-3">
      <div className="layout-container">
        <div className="d-flex flex-column mx-4 mt-2 p-5">{children}</div>
      </div>
    </div>
  )
}

export default Layout
