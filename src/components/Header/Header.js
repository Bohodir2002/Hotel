import React from 'react'
import { Link } from 'react-router-dom'
import h from '../Header/Header.module.css'

const Header = () => {
  return (
    <div className={h.img}>
      <div className={h.card}>
        <div >
          <h1 className={h.h1}> Luxurious Rooms</h1>
          <div className={h.border}></div>
          <h3 className={h.h3}>Deluxe Rooms Starting At 300$</h3>
          <Link to={"/Rooms"} className={"btn btn-primary"}>OUR ROOMS</Link>
        </div>
      </div>
    </div>
  )
}

export default Header