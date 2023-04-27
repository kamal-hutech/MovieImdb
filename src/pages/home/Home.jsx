import React from "react"

import HeroBanner from "./heroBanner/HeroBanner"

import "./style.scss"

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div style={{ height: "1000px" }}></div>
    </div>
  )
}

export default Home
