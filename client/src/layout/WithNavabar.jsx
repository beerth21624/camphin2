import React from "react";
import Headbar from "../components/Headbar";
import '../App.css'

export default function WithNavabar({ children }) {
  return (
    <div className="main">
      <Headbar />
      {children}
    </div>
  )
}
