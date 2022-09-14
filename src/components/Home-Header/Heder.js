import React from 'react'
import { Link } from 'react-router-dom'
import y from './Header.module.css'
const Heder = () => {
  return (
    <div>
      <div className={y.img}>
        <div className={y.card}>
          <div>
            <h1 className={y.h1}> Available Rooms</h1>
            <div className={y.border}></div>
            <h3 className={y.h3}>Best In Class Room</h3>
            <Link to={"/"} className={'btn btn-warning'}>RETURN HOME</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heder
